<?php
/** Ojiva AI admin — dashboard: chat + lead numbers, trends, what needs attention. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
$db = ojiva_db();
purge_old_chats();

$one = function (string $sql, array $args = []) use ($db) {
    $q = $db->prepare($sql);
    $q->execute($args);
    return $q->fetch();
};

$chats = $one("SELECT
    SUM(started_at >= CURDATE()) AS today,
    SUM(started_at >= CURDATE() - INTERVAL 6 DAY) AS week,
    COUNT(*) AS month,
    SUM(lead_id IS NOT NULL) AS month_leads,
    SUM(form_shown AND lead_id IS NULL) AS missed,
    SUM(language = 'hi') AS hindi,
    SUM(device = 'mobile') AS mobile,
    SUM(from_ad <> '') AS from_ads
  FROM ai_chat_sessions WHERE started_at >= CURDATE() - INTERVAL 29 DAY");

$leads = $one("SELECT
    SUM(created_at >= CURDATE()) AS today,
    SUM(created_at >= CURDATE() - INTERVAL 6 DAY) AS week,
    SUM(status = 'new') AS fresh,
    SUM(status = 'follow_up' AND follow_up_on <= CURDATE()) AS due,
    SUM(status = 'converted' AND created_at >= CURDATE() - INTERVAL 29 DAY) AS won,
    SUM(assigned_to = ? AND status IN ('new','contacted','follow_up')) AS mine
  FROM ai_chat_leads", [$user['id']]);

$ai = $one("SELECT AVG(IF(error = '', latency_ms, NULL)) AS ms, SUM(error <> '') AS failed,
    SUM(input_tokens) AS input_tokens, SUM(output_tokens) AS output_tokens,
    SUM(cache_read_tokens) AS cache_read_tokens, SUM(cache_write_tokens) AS cache_write_tokens,
    COUNT(*) AS answers
  FROM ai_chat_messages WHERE role = 'assistant' AND created_at >= CURDATE() - INTERVAL 29 DAY");

$flagged = (int)$db->query("SELECT COUNT(*) FROM ai_chat_sessions WHERE review = 'flagged'")->fetchColumn();

// Last 14 days, chats and leads per day
$days = [];
for ($i = 13; $i >= 0; $i--) $days[date('Y-m-d', strtotime("-$i day"))] = ['chats' => 0, 'leads' => 0];
foreach ($db->query("SELECT DATE(started_at) d, COUNT(*) n FROM ai_chat_sessions WHERE started_at >= CURDATE() - INTERVAL 13 DAY GROUP BY d") as $r) $days[$r['d']]['chats'] = (int)$r['n'];
foreach ($db->query("SELECT DATE(created_at) d, COUNT(*) n FROM ai_chat_leads WHERE created_at >= CURDATE() - INTERVAL 13 DAY GROUP BY d") as $r) $days[$r['d']]['leads'] = (int)$r['n'];

$pages = $db->query("SELECT page_first AS page, COUNT(*) AS chats, SUM(lead_id IS NOT NULL) AS leads
    FROM ai_chat_sessions WHERE started_at >= CURDATE() - INTERVAL 29 DAY AND page_first <> ''
    GROUP BY page_first ORDER BY chats DESC LIMIT 8")->fetchAll();

$recent = $db->query("SELECT id, last_message_at, first_question, visitor_messages, page_first, lead_id, form_shown
    FROM ai_chat_sessions ORDER BY last_message_at DESC LIMIT 6")->fetchAll();

$pct = fn($a, $b) => $b ? round(100 * $a / $b) . '%' : '—';
$month = (int)$chats['month'];

layout_start('Dashboard', $user);
?>
<div class="page-head">
  <h1>Dashboard</h1>
  <p class="muted">AI chat on ojiva.ai · last 30 days unless noted · times in IST</p>
</div>

<?php if ($leads['fresh'] || $leads['due'] || $leads['mine'] || $flagged || $chats['missed']): ?>
<section class="attention">
  <?php if ($leads['fresh']): ?><a href="leads.php?status=new"><b><?= (int)$leads['fresh'] ?></b> new lead<?= $leads['fresh'] == 1 ? '' : 's' ?> not called yet</a><?php endif; ?>
  <?php if ($leads['due']): ?><a href="leads.php?view=overdue"><b><?= (int)$leads['due'] ?></b> follow-up<?= $leads['due'] == 1 ? '' : 's' ?> due</a><?php endif; ?>
  <?php if ($leads['mine']): ?><a href="leads.php?view=mine"><b><?= (int)$leads['mine'] ?></b> open lead<?= $leads['mine'] == 1 ? '' : 's' ?> assigned to you</a><?php endif; ?>
  <?php if ($chats['missed']): ?><a href="conversations.php?show=missed"><b><?= (int)$chats['missed'] ?></b> saw the callback form but left</a><?php endif; ?>
  <?php if ($flagged): ?><a href="conversations.php?show=flagged"><b><?= $flagged ?></b> AI answer<?= $flagged == 1 ? '' : 's' ?> flagged for review</a><?php endif; ?>
</section>
<?php endif; ?>

<section class="stats">
  <div class="stat"><b><?= (int)$chats['today'] ?></b><span>Chats today</span><small><?= (int)$chats['week'] ?> in 7 days · <?= $month ?> in 30</small></div>
  <div class="stat"><b><?= (int)$leads['today'] ?></b><span>Leads today</span><small><?= (int)$leads['week'] ?> in 7 days</small></div>
  <div class="stat stat-new"><b><?= $pct((int)$chats['month_leads'], $month) ?></b><span>Chats that became leads</span><small><?= (int)$chats['month_leads'] ?> of <?= $month ?></small></div>
  <a class="stat" href="leads.php?status=converted"><b><?= (int)$leads['won'] ?></b><span>Converted</span><small>leads from the last 30 days</small></a>
  <div class="stat"><b><?= $ai['ms'] ? number_format($ai['ms'] / 1000, 1) . ' s' : '—' ?></b><span>Average AI reply time</span><small><?= (int)$ai['failed'] ?> unanswered</small></div>
  <div class="stat"><b>$<?= number_format(ai_cost($ai), 2) ?></b><span>AI cost (approx.)</span><small><?= (int)$ai['answers'] ?> answers · $<?= $ai['answers'] ? number_format(ai_cost($ai) / $ai['answers'], 4) : '0' ?> each</small></div>
</section>

<div class="grid">
  <section class="card">
    <h2>Last 14 days</h2>
    <?php
      $max = max(1, ...array_values(array_map(fn($d) => $d['chats'], $days)));
      $w = 640; $hgt = 170; $base = 150; $slot = $w / 14; $bw = $slot * 0.34;
    ?>
    <svg class="chart" viewBox="0 0 <?= $w ?> <?= $hgt + 18 ?>" role="img" aria-label="Chats and leads per day for the last 14 days">
      <?php $i = 0; foreach ($days as $d => $v):
        $x = $i * $slot + $slot * 0.14;
        $ch = $v['chats'] / $max * ($base - 14);
        $lh = $v['leads'] / $max * ($base - 14); ?>
        <g>
          <title><?= h(date('D d M', strtotime($d))) ?>: <?= $v['chats'] ?> chats, <?= $v['leads'] ?> leads</title>
          <rect class="bar-chats" x="<?= round($x, 1) ?>" y="<?= round($base - $ch, 1) ?>" width="<?= round($bw, 1) ?>" height="<?= round($ch, 1) ?>" rx="3"/>
          <rect class="bar-leads" x="<?= round($x + $bw + 2, 1) ?>" y="<?= round($base - $lh, 1) ?>" width="<?= round($bw, 1) ?>" height="<?= round($lh, 1) ?>" rx="3"/>
          <?php if ($v['chats']): ?><text class="bar-val" x="<?= round($x + $bw / 2, 1) ?>" y="<?= round($base - $ch - 4, 1) ?>"><?= $v['chats'] ?></text><?php endif; ?>
          <text class="bar-day" x="<?= round($x + $bw, 1) ?>" y="<?= $base + 16 ?>"><?= date($i % 2 ? 'd' : 'd M', strtotime($d)) ?></text>
        </g>
      <?php $i++; endforeach; ?>
      <line class="axis" x1="0" x2="<?= $w ?>" y1="<?= $base ?>" y2="<?= $base ?>"/>
    </svg>
    <p class="legend"><span class="key key-chats"></span> Chats <span class="key key-leads"></span> Leads</p>

    <h2>Who is chatting</h2>
    <dl class="split">
      <dt>Wrote in Hindi</dt><dd><?= $pct((int)$chats['hindi'], $month) ?></dd>
      <dt>On a phone</dt><dd><?= $pct((int)$chats['mobile'], $month) ?></dd>
      <dt>Came from a Google / Meta ad</dt><dd><?= $pct((int)$chats['from_ads'], $month) ?></dd>
    </dl>
  </section>

  <section class="card">
    <h2>Pages where chats start</h2>
    <?php if (!$pages): ?><p class="muted">No chats yet.</p><?php else: ?>
    <table class="mini">
      <thead><tr><th>Page</th><th>Chats</th><th>Leads</th><th>Rate</th></tr></thead>
      <tbody>
      <?php foreach ($pages as $p): ?>
        <tr><td><a href="conversations.php?page=<?= rawurlencode($p['page']) ?>"><?= h($p['page']) ?></a></td><td><?= (int)$p['chats'] ?></td><td><?= (int)$p['leads'] ?></td><td><?= $pct((int)$p['leads'], (int)$p['chats']) ?></td></tr>
      <?php endforeach; ?>
      </tbody>
    </table>
    <?php endif; ?>

    <h2>Latest conversations</h2>
    <?php if (!$recent): ?><p class="muted">No chats yet.</p><?php endif; ?>
    <ul class="recent">
      <?php foreach ($recent as $c): ?>
        <li>
          <a href="conversation.php?id=<?= (int)$c['id'] ?>"><?= h(mb_strimwidth($c['first_question'] ?: 'Opened the chat — no message yet', 0, 90, '…')) ?></a>
          <small><?= h(time_ago($c['last_message_at'])) ?> · <?= h($c['page_first']) ?> · <?= (int)$c['visitor_messages'] ?> msg
            <?= $c['lead_id'] ? ' · <span class="tag tag-lead">Lead</span>' : ($c['form_shown'] ? ' · <span class="tag">Saw form</span>' : '') ?></small>
        </li>
      <?php endforeach; ?>
    </ul>
    <p><a href="conversations.php">All conversations →</a></p>
  </section>
</div>
<?php layout_end();
