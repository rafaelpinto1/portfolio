// ==================== SPLASH ====================
(function () {
    function hideSplash() {
        const s = document.getElementById('splash');
        if (s) s.classList.add('hidden');
    }

    function applyAndDismiss(dark) {
        document.body.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        hideSplash();
    }

    const splashEl = document.getElementById('splash');
    const btnLight = document.getElementById('splashLight');
    const btnDark  = document.getElementById('splashDark');

    // Preview hover — adiciona classe no splash para o CSS reagir
    if (btnLight && splashEl) {
        btnLight.addEventListener('mouseenter', () => { splashEl.classList.add('preview-light'); splashEl.classList.remove('preview-dark'); });
        btnLight.addEventListener('mouseleave', () => splashEl.classList.remove('preview-light'));
    }
    if (btnDark && splashEl) {
        btnDark.addEventListener('mouseenter', () => { splashEl.classList.add('preview-dark'); splashEl.classList.remove('preview-light'); });
        btnDark.addEventListener('mouseleave', () => splashEl.classList.remove('preview-dark'));
    }

    if (btnLight) btnLight.addEventListener('click', () => applyAndDismiss(false));
    if (btnDark)  btnDark.addEventListener('click',  () => applyAndDismiss(true));

})();

document.addEventListener('DOMContentLoaded', () => {

    // ==================== MENU HAMBÚRGUER ====================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu    = document.getElementById('navMenu');
    const navLinks   = document.querySelectorAll('.nav-link');

    function closeMenu() {
        navMenu.classList.remove('active');
        menuToggle && menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle && menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    navLinks.forEach(l => l.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(); });

    // ==================== SCROLL SUAVE ====================
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.pushState(null, null, id); }
        });
    });

    // ==================== DARK MODE ====================
    const toggle     = document.getElementById('darkModeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved      = localStorage.getItem('theme');

    function applyTheme(dark) {
        document.body.classList.toggle('dark', dark);
        if (toggle) toggle.checked = dark;
    }

    applyTheme(saved === 'dark' || (!saved && prefersDark));

    toggle && toggle.addEventListener('change', () => {
        applyTheme(toggle.checked);
        localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
    });

    // ==================== SCROLL SPY ====================
    const sections = document.querySelectorAll('section[id]');

    function spy() {
        const pos = window.scrollY + 110;
        sections.forEach(s => {
            const link = document.querySelector(`.nav-link[href="#${s.id}"]`);
            if (link && pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', spy, { passive: true });
    spy();

    // ==================== SCROLL REVEAL ====================
    document.querySelectorAll(
        '.card, .project-card, .timeline-item, .about-text, .hero-content, .skill-badge, .skills-category'
    ).forEach(el => {
        el.classList.add('fade-up');
        new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }).observe(el);
    });


    // ==================== AI CHATBOT ====================

    /* --- Normalização e matching --- */
    function norm(s) {
        return s.toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9\s]/g, ' ')
            .replace(/\s+/g, ' ').trim();
    }

    /*
     * Estratégia de matching:
     * - Triggers com espaço: busca de frase na query normalizada
     * - Triggers ≤ 2 chars: palavra exata
     * - Triggers 3-5 chars: palavra exata
     * - Triggers ≥ 6 chars: qualquer palavra da query que COMEÇA com o trigger
     * Isso evita "ia" matchando dentro de "salaria" e "quanto" matchando "quantos".
     */
    function wordHit(q, trigger) {
        const t = norm(trigger);
        if (t.includes(' ')) return q.includes(t);
        const words = q.split(' ');
        if (t.length <= 5) return words.includes(t);
        return words.some(w => w.startsWith(t));
    }

    const KB = [
        // --- Localização ---
        {
            k: ['mora', 'morar', 'cidade', 'localizacao', 'local', 'bairro', 'cachambi', 'rio de janeiro', 'onde fica', 'estado'],
            r: '📍 Rafael mora em <strong>Cachambi, Rio de Janeiro/RJ</strong>.<br>Disponível para oportunidades <strong>remotas</strong>, híbridas ou presenciais no Rio de Janeiro.'
        },
        // --- Idade / dados pessoais ---
        {
            k: ['anos', 'quantos anos', 'idade', 'nasceu', 'nascimento', 'velho', 'jovem'],
            r: '🎂 Rafael tem <strong>29 anos</strong>, é brasileiro, solteiro.<br>Mora em Cachambi, Rio de Janeiro/RJ. CNH categorias <strong>A e B</strong>.'
        },
        // --- CNH ---
        {
            k: ['cnh', 'habilitacao', 'carteira de motorista', 'dirige', 'carro', 'moto'],
            r: '🚗 Rafael possui <strong>CNH categorias A e B</strong> (moto e carro).'
        },
        // --- Senioridade ---
        {
            k: ['nivel', 'senioridade', 'senior', 'junior', 'pleno', 'level', 'cargo nivel', 'experiencia nivel'],
            r: '📈 Rafael atua no nível <strong>Pleno → Sênior</strong>: 3+ anos especializados em Microsoft Fabric e Power BI, com gestão autônoma de projetos e múltiplos clientes simultâneos. Mestrado em andamento no CEFET/RJ.'
        },
        // --- Microsoft Fabric ---
        {
            k: ['fabric', 'lakehouse', 'direct lake', 'dataflow', 'semantic model', 'capacity', 'workspace', 'pipeline fabric'],
            r: '⚡ <strong>Microsoft Fabric — especialidade central:</strong><br><br>• Administração de Capacities e Workspaces<br>• Data Pipelines, Dataflows Gen1 & Gen2<br>• Lakehouses e Semantic Models<br>• Otimização de performance em <strong>Direct Lake</strong><br>• Governança com RLS e controle de acesso'
        },
        // --- Power BI ---
        {
            k: ['power bi', 'powerbi', 'dax', 'relatorio', 'dashboard', 'business intelligence', 'xmla', 'rls', 'kpi'],
            r: '📊 <strong>Power BI — expertise avançada:</strong><br><br>• DAX avançado + Power Query M<br>• Governança com <strong>RLS</strong> e XMLA endpoints<br>• Dashboards executivos com KPIs estratégicos<br>• Integração direta com Microsoft Fabric via Direct Lake'
        },
        // --- IA / AI Agents / Automação ---
        {
            k: ['inteligencia artificial', 'machine learning', 'agente', 'agentes', 'agent', 'agents', 'prompt', 'llm', 'llms', 'rag', 'retrieval', 'gpt', 'generativa', 'openai', 'nlp', 'n8n', 'automacao', 'automatiza', 'webhook', 'api rest', 'visao computacional', 'visao', 'robotica'],
            r: '🤖 <strong>IA aplicada a dados — diferencial competitivo:</strong><br><br>• Desenvolvimento com <strong>LLMs</strong>, <strong>IA Generativa</strong> e <strong>RAG</strong> (Retrieval-Augmented Generation)<br>• Criação de <strong>AI Agents</strong> para consulta autônoma a dados<br>• Engenharia de prompts e automação de pipelines ETL com <strong>n8n</strong> (webhooks + APIs REST)<br>• Integrações via <strong>Microsoft Graph API</strong><br>• Mestrando em CEFET/RJ — Visão Computacional aplicada à Robótica'
        },
        // --- Experiência profissional ---
        {
            k: ['experiencia', 'experiencias', 'trabalha', 'empresa', 'cargo', 'emprego', 'multipla', 'atuacao', 'trabalhou', 'historico', 'carreira'],
            r: '🏢 <strong>Multipla Tecnologia da Informação Ltda</strong> — Analista de Dados (fev/2023 – atual)<br><br>• <strong>Fabric:</strong> Capacities, Lakehouses, Pipelines Gen2, Semantic Models, Direct Lake<br>• <strong>IA:</strong> LLMs, RAG, AI Agents, engenharia de prompts, ETL com n8n<br>• <strong>Dev:</strong> Python, Git/GitHub, Azure DevOps, Azure Functions, Selenium<br>• <strong>Power BI:</strong> DAX avançado, RLS, XMLA, Power Query M<br>• <strong>Observabilidade:</strong> Zabbix + Grafana<br>• <strong>Integrações:</strong> Graph API, VPN Gateway para SQL Server e Oracle on-premises<br><br>Anterior: Técnico de TI (5 anos) — LMG Bonfim'
        },
        // --- Stack / habilidades ---
        {
            k: ['skill', 'ferramentas', 'tecnologia', 'tecnologias', 'stack', 'habilidade', 'habilidades', 'conhece', 'domina', 'utiliza', 'usa'],
            r: '🛠️ <strong>Stack completo:</strong><br><br>🤖 <strong>IA & Engenharia de IA:</strong> LLMs · IA Generativa · RAG · AI Agents · Eng. de Prompts · Visão Computacional · OCR<br>📊 <strong>Dados & Analytics:</strong> Microsoft Fabric · Power BI · DAX · Power Query M · Direct Lake · Lakehouse · ETL/ELT · SQL · Python<br>💻 <strong>Dev & Integração:</strong> APIs REST · Graph API · Git/GitHub · Azure DevOps · Azure Functions · Selenium · Azure AZ-900<br>⚙️ <strong>Automação & Processos:</strong> n8n · Webhooks · Zabbix · Grafana<br>🌐 <strong>Idioma:</strong> Inglês B1'
        },
        // --- Formação ---
        {
            k: ['formacao', 'faculdade', 'estudo', 'graduacao', 'mestrado', 'pos', 'cefet', 'unisuam', 'academico', 'escolaridade', 'certificacao', 'certificacoes'],
            r: '🎓 <strong>Formação acadêmica:</strong><br><br>• <strong>Mestrado em Ciência da Computação</strong> — CEFET/RJ (cursando · prev. 2028)<br>&nbsp;&nbsp;Linha de pesquisa: Visão Computacional aplicada à Robótica<br>• Pós-graduação em Ciência de Dados & IA — UNISUAM (Dez/2025)<br>• Graduação em ADS — UNISUAM (Dez/2024)<br><br>🏅 <strong>Certificações:</strong><br>• Microsoft Azure AZ-900<br>• Oracle AI Foundations Associate (1Z0-1195)'
        },
        // --- Disponibilidade / vagas ---
        {
            k: ['disponivel', 'disponibilidade', 'procurando', 'vaga', 'oportunidade', 'contrato', 'remoto', 'hibrido', 'presencial', 'clt', 'pj', 'freelance', 'empregado'],
            r: '✅ Rafael está <strong>aberto a oportunidades</strong> em dados, BI e IA.<br><br>Foco em posições com <strong>Microsoft Fabric, Power BI, Engenharia de Dados ou IA aplicada</strong>. Funciona remotamente ou presencial no Rio de Janeiro.<br><br>📱 WhatsApp: <strong>(21) 98590-0023</strong><br>🔗 linkedin.com/in/rafaelpinto1'
        },
        // --- Projetos ---
        {
            k: ['projeto', 'projetos', 'portfolio', 'github', 'case', 'cases', 'trabalho feito', 'construiu', 'desenvolveu'],
            r: '📊 <strong>Projetos em destaque:</strong><br><br>• 📈 <strong>Dashboard de Vendas Interativo</strong> — Power BI + SQL + DAX (segmentação + KPIs)<br>• 🧠 <strong>Análise de Churn</strong> — Python + Scikit-learn + Pandas (modelo preditivo ML)<br>• ⚙️ <strong>Pipeline ETL</strong> — Python + SQLite + automação (rastreabilidade end-to-end)<br><br>Todos os projetos utilizam dados sintéticos em conformidade com <strong>LGPD</strong>.'
        },
        // --- Contato ---
        {
            k: ['contato', 'email', 'whatsapp', 'telefone', 'falar', 'conversar', 'linkedin', 'lattes', 'chamar', 'contatar'],
            r: '📬 <strong>Fale com o Rafael:</strong><br><br>📧 Rafael-pinto@outlook.com.br<br>💬 WhatsApp: <strong>(21) 98590-0023</strong><br>🔗 linkedin.com/in/rafaelpinto1<br>🎓 lattes.cnpq.br/2078391939625415'
        },
        // --- Inglês ---
        {
            k: ['ingles', 'idioma', 'lingua', 'english', 'fluente', 'b1', 'b2', 'idiomas'],
            r: '🌐 Rafael possui <strong>Inglês B1</strong> — leitura técnica de documentação, comunicação escrita e compreensão em contextos profissionais.'
        },
        // --- LGPD / governança ---
        {
            k: ['lgpd', 'privacidade', 'etica', 'dados pessoais', 'governanca', 'conformidade', 'compliance'],
            r: '🛡️ <strong>LGPD & Governança:</strong> conformidade é prioridade em todos os projetos públicos (dados sintéticos/anonimizados). Experiência com RLS, XMLA e governança no ecossistema Microsoft Fabric.'
        },
        // --- Salário (SEM "quanto" genérico para evitar falsos positivos) ---
        {
            k: ['salario', 'salarios', 'pretensao', 'remuneracao', 'remuner', 'ganha', 'quanto ganha', 'expectativa salarial', 'pretensao salarial', 'pagar'],
            r: '💼 Para discutir remuneração, o melhor é uma <strong>conversa direta</strong>.<br><br>Entre em contato via <strong>WhatsApp: (21) 98590-0023</strong> ou LinkedIn!'
        },
        // --- Soft skills ---
        {
            k: ['soft skill', 'comunicacao', 'apresentacao', 'storytelling', 'stakeholder', 'lideranca', 'equipe', 'interpessoal', 'relacionamento'],
            r: '🎯 <strong>Soft skills:</strong><br><br>• Traduz análises técnicas para stakeholders executivos<br>• Storytelling com dados e apresentação de resultados<br>• Gestão simultânea de múltiplos clientes/projetos<br>• Experiência cross-funcional (TI ↔ negócios)'
        }
    ];

    const FALLBACK = '🤔 Não tenho uma resposta específica para isso.<br><br>Tente perguntar sobre:<br>• <strong>experiência</strong> · <strong>stack técnico</strong> · <strong>formação</strong><br>• <strong>disponibilidade</strong> · <strong>contato</strong> · <strong>localização</strong><br><br>Ou fale diretamente: 💬 <strong>WhatsApp (21) 98590-0023</strong>';

    function findResponse(input) {
        const q = norm(input);
        for (const entry of KB) {
            if (entry.k.some(t => wordHit(q, t))) return entry.r;
        }
        return FALLBACK;
    }

    /* --- UI do chatbot --- */
    const chatWidget  = document.getElementById('chatWidget');
    const chatFab     = document.getElementById('chatFab');
    const chatPanel   = document.getElementById('chatPanel');
    const chatClose   = document.getElementById('chatClose');
    const chatMsgs    = document.getElementById('chatMessages');
    const chatInput   = document.getElementById('chatInput');
    const chatSend    = document.getElementById('chatSend');

    if (!chatFab) return;

    function openChat()  { chatWidget.classList.add('open');    chatFab.setAttribute('aria-expanded', 'true');  chatPanel.setAttribute('aria-hidden', 'false'); setTimeout(() => chatInput.focus(), 350); }
    function closeChat() { chatWidget.classList.remove('open'); chatFab.setAttribute('aria-expanded', 'false'); chatPanel.setAttribute('aria-hidden', 'true'); }

    chatFab.addEventListener('click', () => chatWidget.classList.contains('open') ? closeChat() : openChat());
    chatClose.addEventListener('click', closeChat);

    function now() { return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); }

    function addMsg(html, who) {
        const wrap   = document.createElement('div');
        wrap.className = `chat-message ${who}`;
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = html;
        const time   = document.createElement('span');
        time.className = 'message-time';
        time.textContent = now();
        wrap.append(bubble, time);
        chatMsgs.appendChild(wrap);
        chatMsgs.scrollTop = chatMsgs.scrollHeight;
        return wrap;
    }

    function showTyping() {
        const w = document.createElement('div');
        w.className = 'chat-message bot'; w.id = 'typingIndicator';
        w.innerHTML = '<div class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
        chatMsgs.appendChild(w);
        chatMsgs.scrollTop = chatMsgs.scrollHeight;
    }

    function hideTyping() { document.getElementById('typingIndicator')?.remove(); }

    function handleQuery(q) {
        q = q.trim();
        if (!q) return;
        document.getElementById('chatSuggestions')?.remove();
        addMsg(q, 'user');
        chatInput.value = '';
        showTyping();
        setTimeout(() => { hideTyping(); addMsg(findResponse(q), 'bot'); }, 600 + Math.random() * 700);
    }

    chatSend.addEventListener('click', () => handleQuery(chatInput.value));
    chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleQuery(chatInput.value); });
    document.querySelectorAll('.suggestion-chip').forEach(c =>
        c.addEventListener('click', () => handleQuery(c.dataset.question))
    );
});
