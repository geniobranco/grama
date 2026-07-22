# VERDE — campo vivo

Landing page Next.js com grama 3D procedural, sem texturas ou imagens de vegetação.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` e passe o cursor pelo campo. Em PowerShell, caso `npm` esteja bloqueado por política de scripts, use `npm.cmd` nos mesmos comandos.

## O que está na cena

- `components/GrassExperience.tsx`: canvas React Three Fiber, geometria instanciada e ciclo de animação.
- `components/grass-shaders.ts`: vertex shader de vento/interação e fragment shader com variação cromática, translucidez e luz de fim de tarde.
- `app/page.tsx`: interface flutuante e acessível sobre a cena.

Cada lâmina recebe atributos aleatórios de raiz, altura, direção e fase. A posição do cursor é suavizada por uma mola no `requestAnimationFrame` do React Three Fiber e enviada como uniforme ao shader. Isto mantém o trabalho pesado na GPU e permite reduzir a densidade automaticamente em telas menores.
