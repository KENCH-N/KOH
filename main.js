const nodes = [
  { id:'center', type:'center', x:385, y:300, w:150, h:72,
    title:'Kingdom of Heaven', sub:'Matthew 5–7' },

  { id:'cmd1', type:'cmd', x:20, y:88,  w:182, h:90,
    badge:'You shall not covet', title:'AI cheating culture',
    sub:'Wanting grades without effort — LLMs used as shortcuts',
    detail:{ label:'Commandment — Guardrail', scenario:'The scene',
      body:`Since AI like ChatGPT entered schools, students use it to skip the work while coveting the grade. The Bible warns: <em>"Dishonest money dwindles away; whoever gathers little by little makes it grow"</em> (Proverbs 13:11).\n\nCheating with AI is like that dishonest money — it works until the moment it doesn't. The student who lets AI think for them will one day face an exam, a job interview, a real problem — and find nothing underneath.`}},

  { id:'cmd2', type:'cmd', x:20, y:230, w:182, h:90,
    badge:'You shall not lie', title:'AI deepfakes & fraud',
    sub:'$40B in estimated losses by 2027 — voices nearly indistinguishable',
    detail:{ label:'Commandment — Guardrail', scenario:'The scene',
      body:`AI deepfake images and voice clones are used to scam individuals and businesses. A UC Berkeley researcher notes that AI voices will soon be nearly indistinguishable on phone calls — where most fraud occurs.\n\nThis commandment, followed seriously, drives the demand for stricter regulation of synthetic media and protects the most vulnerable from being deceived.`}},

  { id:'cmd3', type:'cmd', x:20, y:372, w:182, h:90,
    badge:'You shall not murder', title:'AI autonomous weapons',
    sub:'Anthropic refused a $200M U.S. military contract',
    detail:{ label:'Commandment — Guardrail', scenario:'The scene',
      body:`The U.S. military has pushed to integrate AI into warfare. Anthropic drew a moral line — refusing a $200 million government contract that would have involved autonomous weapons capable of taking lives.\n\nThis commandment marks the absolute boundary where technology must not go. AI that kills without human judgment is the clearest modern violation of "You shall not murder."`}},

  { id:'ser1', type:'ser', x:718, y:60,  w:190, h:90,
    badge:'The Golden Rule', title:'ICE deportations',
    sub:'Policies built without empathy for those targeted',
    detail:{ label:'Sermon on the Mount', scenario:'Real-world scenario',
      body:`Immigration enforcement targets Latin American minorities — sometimes deporting full U.S. citizens. These policies were not built with the Golden Rule in mind.\n\nScenario: Imagine your family being separated and removed from the only country you've ever known. Would you still support the same policy? <em>"Do to others what you would have them do to you."</em> — Matthew 7:12`}},

  { id:'ser2', type:'ser', x:718, y:192, w:190, h:90,
    badge:'Concerning retaliation', title:'"Alpha" influencer culture',
    sub:'Young men taught to always hit back harder',
    detail:{ label:'Sermon on the Mount', scenario:'Real-world scenario',
      body:`Male influencers online preach that not retaliating is weakness — "when you get hit, hit back harder." This is directly against the Sermon on the Mount.\n\nScenario: Someone disrespects you publicly at school. The pressure to escalate is enormous. Jesus says the stronger path — the harder one — is choosing your response rather than letting their words decide it for you.`}},

  { id:'ser3', type:'ser', x:718, y:324, w:190, h:90,
    badge:'Judging others', title:'Disability mockery on Instagram',
    sub:'Reels mocking disabled people reach millions of views',
    detail:{ label:'Sermon on the Mount', scenario:'Real-world scenario',
      body:`Instagram and TikTok push "humorous" content that mocks people with disabilities — normalizing a disturbing form of judgment disguised as comedy.\n\nScenario: A reel appears on your feed laughing at someone's condition. Sharing it feels harmless. Jesus warns: <em>"Do not judge, or you too will be judged."</em> Every share is a vote for the world you want to live in.`}},

  { id:'ser4', type:'ser', x:718, y:456, w:190, h:90,
    badge:'Treasure & worry', title:'Influencer wealth obsession',
    sub:'Loans taken out to flaunt luxury — a twisted idea of success',
    detail:{ label:'Sermon on the Mount', scenario:'Real-world scenario',
      body:`Social media floods young people with images of influencers flaunting cars, clothes, and watches — creating the false belief that visible wealth is success.\n\nScenario: $350 sneakers sit in a store window. Three influencers wore them this week. You feel inadequate without them. Jesus: <em>"Do not store up treasures on earth... but store up treasures in heaven."</em> The things you don't buy cannot imprison you.`}},

  { id:'ser5', type:'ser', x:718, y:588, w:190, h:90,
    badge:'Hearers & doers', title:'Academic advice ignored',
    sub:'Receiving every tool for success and choosing not to act',
    detail:{ label:'Sermon on the Mount', scenario:'Real-world scenario',
      body:`Teachers give students every resource to succeed. Some act on it; many don't — and the consequences are real.\n\nScenario: You receive the exact guidance needed to pass a course. You nod, and do nothing. Jesus says the wise person builds on rock by <em>doing</em> what they hear — not just listening. The difference between success and failure is almost always execution, not information.`}},

  { id:'ori1', type:'ori', x:80,  y:720, w:205, h:90,
    badge:'Original teaching 1', title:"Ignore the \"it's too late\" voice",
    sub:'Faith has no expiry date — the window is always open',
    detail:{ label:'Original Teaching', scenario:'How it changes the world',
      body:`There is a voice that whispers you've missed the window — to convert, to start, to show up after you're already late. That voice is a "little devil on your shoulder."\n\nMany believe Catholicism must be inherited at birth — that conversion later is embarrassing. But God has no expiry date on welcome. Showing up to basketball practice late matters far less than not showing up at all. <em>Act anyway.</em> Ignoring that voice is how faith begins for many people.`}},

  { id:'ori2', type:'ori', x:357, y:720, w:205, h:90,
    badge:'Original teaching 2', title:'Respect the anonymous neighbour',
    sub:'Cyberbullying victims are 2× more likely to take their lives',
    detail:{ label:'Original Teaching', scenario:'How it changes the world',
      body:`Technology hides identity — making cruelty easier and more common. Cyberbullying is rampant because saying harmful things online feels consequence-free.\n\nResearch shows victims of cyberbullying are twice as likely to take their own lives than non-bullied individuals. One comment can end a life you'll never know you touched.\n\nLoving thy neighbour doesn't begin with knowing their name. It begins with acknowledging that they exist. This teaching — taken seriously — could save lives today.`}},

  { id:'ori3', type:'ori', x:634, y:720, w:205, h:90,
    badge:'Original teaching 3', title:'Learn to separate from the screen',
    sub:'8 hrs/day average — tied to depression & lowered social skills',
    detail:{ label:'Original Teaching', scenario:'How it changes the world',
      body:`Teenagers now average 8 hours of screen time per day. Studies show this lowers social skills and increases the likelihood of depression.\n\nThe screen traps us in a dopamine loop — pulling us away from the physical world where God is most tangibly felt. Breaking away — playing sports, time with friends, sitting in silence — is a spiritual act.\n\n<em>The real world is where community, service, and faith are lived, not watched.</em> Every hour away from the screen is an hour returned to the world God made.`}},
];

const typeColors = { cmd:'#d06030', ser:'#2070c8', ori:'#20a040' };

function buildMap() {
  const map = document.getElementById('map');
  const svg = document.getElementById('lines');
  svg.innerHTML = '';
  map.querySelectorAll('.node').forEach(el => el.remove());

  const center = nodes.find(n => n.id === 'center');
  const CX = center.x + center.w / 2;
  const CY = center.y + center.h / 2;

  let mapH = 0;
  nodes.forEach(n => { mapH = Math.max(mapH, n.y + n.h + 40); });
  map.style.minHeight = mapH + 'px';

  nodes.forEach(n => {
    const el = document.createElement('div');
    el.className = 'node n-' + n.type + (n.type === 'center' ? ' center' : '');
    el.style.cssText = `left:${n.x}px;top:${n.y}px;width:${n.w}px;min-height:${n.h}px;`;
    let inner = '';
    if (n.badge) inner += `<div class="node-badge">${n.badge}</div>`;
    inner += `<div class="node-title">${n.title}</div>`;
    if (n.sub) inner += `<div class="node-sub">${n.sub}</div>`;
    el.innerHTML = inner;
    if (n.detail) el.onclick = () => openPanel(n);
    map.appendChild(el);

    if (n.type === 'center') return;
    const nx = n.x + n.w / 2;
    const ny = n.y + n.h / 2;
    const color = typeColors[n.type];
    let d;
    if (n.type === 'cmd') {
      const midX = nx + (CX - nx) * 0.5;
      d = `M ${nx} ${ny} C ${midX} ${ny}, ${midX} ${CY}, ${CX} ${CY}`;
    } else if (n.type === 'ser') {
      const midX = CX + (nx - CX) * 0.5;
      d = `M ${CX} ${CY} C ${midX} ${CY}, ${midX} ${ny}, ${nx} ${ny}`;
    } else {
      const midY = ny + (CY - ny) * 0.5;
      d = `M ${nx} ${ny} C ${nx} ${midY}, ${CX} ${midY}, ${CX} ${CY}`;
    }
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('fill', 'none');
    path.setAttribute('opacity', '0.35');
    path.setAttribute('stroke-dasharray', '5 4');
    svg.appendChild(path);
  });
}

function enterMap() {
  document.getElementById('start-screen').style.display = 'none';
  const ms = document.getElementById('map-screen');
  ms.style.display = 'block';
  ms.classList.add('fade-in');
  buildMap();
  applyScale();
}

function goBack() {
  document.getElementById('map-screen').style.display = 'none';
  const ss = document.getElementById('start-screen');
  ss.style.display = 'flex';
  ss.classList.add('fade-in');
}

function openPanel(n) {
  const d = n.detail;
  const cls = { cmd:'pb-cmd', ser:'pb-ser', ori:'pb-ori' }[n.type] || '';
  const pb = document.getElementById('pb');
  pb.textContent = d.label;
  pb.className = 'panel-badge ' + cls;
  document.getElementById('pt').textContent = n.title;
  let html = '';
  if (d.scenario) html += `<div class="panel-scenario">${d.scenario}</div>`;
  html += `<div class="panel-body">${d.body.replace(/\n/g,'<br><br>')}</div>`;
  document.getElementById('pb2').innerHTML = html;
  document.getElementById('panel').classList.add('open');
}

function closePanel() { document.getElementById('panel').classList.remove('open'); }
function handleOverlayClick(e) { if (e.target === document.getElementById('panel')) closePanel(); }

function applyScale() {
  const map = document.getElementById('map');
  const wrap = document.getElementById('canvas-wrap');
  if (!wrap) return;
  const scale = Math.min(1, (wrap.clientWidth - 40) / 920);
  if (scale < 1) {
    map.style.transform = `scale(${scale})`;
    map.style.transformOrigin = 'top center';
    map.style.marginBottom = `-${(1 - scale) * 880}px`;
  } else {
    map.style.transform = '';
    map.style.marginBottom = '';
  }
}

window.addEventListener('resize', applyScale);