document.addEventListener('DOMContentLoaded', () => {

    // 1. スライダー機能
    function setupSlider(gridSelector, prevBtnSelector, nextBtnSelector, scrollAmount = 250) {
        const grid = document.querySelector(gridSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);

        if (grid && prevBtn && nextBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    }

    setupSlider('.novel-cover-grid', '.prev-btn', '.next-btn', 200);
    setupSlider('.media-scroll-grid', '.media-prev', '.media-next', 300);
    setupSlider('.design-scroll-grid', '.design-prev', '.design-next', 220);


    // 2. 数式バックグラウンド（軌道処理の影響を受けないよう独立して実行）
    try {
        const formulas = [
            "E = mc²", "F = ma", "PV = nRT", "v = fλ", "a² + b² = c²", "e^{iπ} + 1 = 0",
            "f'(x)", "∫ f(x) dx", "lim_{x→0}", "∑ x_i", "log_b(x)", "dy / dx", "det(A)", "∇ × B",
            "sin θ", "cos θ", "tan θ", "iℏ ∂/∂t", "Δx Δp ≥ ℏ/2", "λ = h / p",
            "∀x ∈ X", "∃y", "A ∩ B", "A ∪ B", "H(X)", "O(n log n)", "P(A|B)",
            "Ψ", "Ω", "∞", "π", "ℏ", "Σ", "λ", "√π"
        ];

        const container = document.getElementById('math-background');
        if (container) {
            const symbolCount = 100;
            const bodyHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            container.style.height = bodyHeight + 'px';

            for (let i = 0; i < symbolCount; i++) {
                const el = document.createElement('div');
                el.className = 'math-symbol-3d';
                el.innerText = formulas[Math.floor(Math.random() * formulas.length)];

                const posX = Math.random() * 100;
                const posY = Math.random() * bodyHeight;
                const size = 18 + Math.random() * 24;
                const translateZ = (Math.random() * 600) - 300;

                el.style.left = posX + 'vw';
                el.style.top = posY + 'px';
                el.style.fontSize = size + 'px';
                el.style.setProperty('--tz', translateZ + 'px');

                // 3秒〜8秒のしっかり見える速さで上昇
                const duration = 3 + Math.random() * 5; 
                const delay = Math.random() * -duration;

                el.style.animationDuration = duration + 's';
                el.style.animationDelay = delay + 's';

                container.appendChild(el);
            }
        }
    } catch (err) {
        console.error("数式生成エラー:", err);
    }

});