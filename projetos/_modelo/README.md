# Como adicionar um projeto novo

1. Copie esta pasta (`projetos/_modelo/`) para `projetos/<seu-id>/` (ex.: `projetos/analise-vendas/`).
2. Edite o `project.json` copiado — `id` precisa ser exatamente igual ao nome da nova pasta.
3. Escolha o `type`:
   - **`"case-study"`** (o exemplo em `project.json` desta pasta): sem demo, mostra um texto de Contexto/Abordagem/Resultado/Stack no modal. Precisa de `context`, `approach` (lista) e `result` dentro de `pt`/`en`.
   - **`"demo-local"`**: tem uma demo real dentro da própria pasta. Crie uma subpasta `demo/` com os arquivos (pelo menos um `index.html`) — veja o exemplo em `demo/index.html` desta pasta. Não usa `context`/`approach`/`result`; usa `desc` (uma frase curta) dentro de `pt`/`en`. Exemplo de `project.json` para este tipo:
     ```json
     {
       "id": "meu-projeto-com-demo",
       "type": "demo-local",
       "icon": "fas fa-flask",
       "thumbClass": "project-thumbnail--ml",
       "pt": { "title": "...", "status": "...", "desc": "...", "tags": ["..."] },
       "en": { "title": "...", "status": "...", "desc": "...", "tags": ["..."] }
     }
     ```
   - **`"demo-external"`**: a demo já está hospedada em outro lugar (outro repositório, outro site). Não precisa de pasta `demo/`; precisa do campo `demoUrl` com a URL completa. Mesmos campos de conteúdo (`desc`) que `demo-local`. Exemplo:
     ```json
     {
       "id": "meu-projeto-externo",
       "type": "demo-external",
       "demoUrl": "https://usuario.github.io/outro-repositorio/",
       "icon": "fab fa-git-alt",
       "thumbClass": "project-thumbnail--git",
       "pt": { "title": "...", "status": "...", "desc": "...", "tags": ["..."] },
       "en": { "title": "...", "status": "...", "desc": "...", "tags": ["..."] }
     }
     ```
4. `icon` é uma classe do Font Awesome (ex.: `"fas fa-chart-bar"`). `thumbClass` precisa ser uma destas 4: `project-thumbnail--bi`, `project-thumbnail--ml`, `project-thumbnail--etl`, `project-thumbnail--git` (são as 4 variações de cor já existentes — criar uma 5ª é uma mudança de CSS separada, não é feito só editando o `project.json`).
5. `order` (opcional) controla a posição no grid — menor aparece primeiro. Sem `order`, o projeto aparece depois de todos que têm, em ordem alfabética de `id`.
6. Dê `git push`. Uma GitHub Action valida e gera a lista automaticamente — se algo estiver errado no `project.json`, a Action falha e mostra o erro exato na aba "Actions" do repositório no GitHub, sem publicar nada quebrado.
