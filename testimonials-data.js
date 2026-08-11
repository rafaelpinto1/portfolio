// testimonials-data.js — depoimentos reais do LinkedIn (recomendações recebidas).
(function (root) {
    'use strict';

    const TESTIMONIALS = [
        {
            id: 'mayara-borges',
            name: 'Mayara Borges',
            linkedinUrl: 'https://www.linkedin.com/in/mayaradacostaborges/',
            date: '2024-05-14',
            role: {
                pt: 'Analista Operacional · Operações Logísticas',
                en: 'Operations Analyst · Logistics Operations',
            },
            relationship: {
                pt: 'Cliente de Rafael',
                en: "Client of Rafael's",
            },
            quote: {
                pt: 'Tenho o prazer de recomendar Rafael pelo excelente trabalho como Técnico em Suporte de TI da Múltipla TI, prestando serviços na GSilva. Não sou da área de TI, mas posso atestar sua excelência como profissional e pessoa. Sempre demonstrando profundo conhecimento, eficiência na resolução de problemas e ótima comunicação. Sendo sempre dedicado e colaborativo. Sem dúvida, ele é um valioso ativo para qualquer equipe, e por isso o recomendo sem hesitação, pois sei que ele faz a diferença onde quer que atue.',
                en: "I'm pleased to recommend Rafael for his excellent work as an IT Support Technician at Múltipla TI, providing services at GSilva. I'm not in the IT field, but I can vouch for his excellence as a professional and as a person. He always shows deep knowledge, efficiency solving problems, and great communication — always dedicated and collaborative. He's without a doubt a valuable asset to any team, and I recommend him without hesitation, because I know he makes a difference wherever he works.",
            },
        },
        {
            id: 'joao-vitor-souto',
            name: 'João Vitor Souto',
            linkedinUrl: 'https://www.linkedin.com/in/joaovitorsouto/',
            date: '2023-08-03',
            role: {
                pt: 'Controladoria · Financeiro · FP&A',
                en: 'Controllership · Finance · FP&A',
            },
            relationship: {
                pt: 'Cliente de Rafael',
                en: "Client of Rafael's",
            },
            quote: {
                pt: 'Rafael é um profissional experiente, apaixonado por tecnologia e sempre demonstrou um profundo conhecimento em sua área. Durante o período em que trabalhamos, mesmo como prestador de serviço, ele foi fundamental na implementação de soluções inovadoras, que otimizaram processos e impulsionaram a eficiência da empresa. Rafael também se destaca pela sua capacidade de se comunicar claramente e colaborar de forma efetiva com toda a equipe. Sua abordagem proativa para resolver problemas e sua atitude positiva foram um excelente exemplo profissional. Ele sempre estava buscando aprender e crescer profissionalmente, o que o torna um recurso valioso em qualquer projeto. Seu trabalho certamente será uma adição valiosa para qualquer organização.',
                en: "Rafael is an experienced professional, passionate about technology, and he always showed deep knowledge in his field. During the time we worked together, even as a service provider, he was key in implementing innovative solutions that streamlined processes and boosted the company's efficiency. Rafael also stands out for his ability to communicate clearly and collaborate effectively with the whole team. His proactive approach to solving problems and his positive attitude were an excellent professional example. He was always looking to learn and grow professionally, which makes him a valuable asset on any project. His work will certainly be a valuable addition to any organization.",
            },
        },
        {
            id: 'pedro-vicente',
            name: 'Pedro Vicente Figueiredo Vasconcellos',
            linkedinUrl: 'https://www.linkedin.com/in/argila-digital/',
            date: '2023-07-24',
            role: {
                pt: 'Artista 3D · Concept Designer',
                en: '3D Artist · Concept Designer',
            },
            relationship: {
                pt: 'Cliente de Rafael',
                en: "Client of Rafael's",
            },
            quote: {
                pt: 'Conheço o Rafael desde que ele era criança e o vi crescer em um adulto exemplar. Sempre curioso e estudioso, uma mente brilhante e extremamente determinado e focado. E hoje ele continua sendo assim. Mais do que um excelente profissional, ele sempre foi e continua sendo um excelente ser humano. Disciplinado, cortês, responsável e respeitoso. Ele sempre busca as melhores soluções e custo/benefício para os projetos em que está alocado. É admirável a sua garra e sede de se desenvolver, aprender e praticar cada dia mais. Eu dou, sem sombra de dúvda, minha máxima recomendação a ele.',
                en: "I've known Rafael since he was a child, and I watched him grow into an exemplary adult. Always curious and studious, a brilliant mind, extremely determined and focused — and he still is today. More than an excellent professional, he has always been, and continues to be, an excellent human being: disciplined, courteous, responsible, and respectful. He always looks for the best solutions and cost/benefit for the projects he's assigned to. His drive and hunger to develop, learn, and keep improving every day are admirable. I give him my highest recommendation, without a shadow of a doubt.",
            },
        },
    ];

    const api = { TESTIMONIALS };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.TestimonialsData = api;
    }
})(typeof window !== 'undefined' ? window : globalThis);
