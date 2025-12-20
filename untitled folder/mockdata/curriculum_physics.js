(function(global){
    'use strict';
    if (!global.RigorousGenerator) return;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // 1. 等加速運動 (位移)
    function physics_kinematics(ctx, rnd) {
        const v0 = Math.floor(rnd() * 10); // 初速
        const a = Math.floor(rnd() * 4) + 1; // 加速度
        const t = Math.floor(rnd() * 5) + 2; // 時間
        
        // S = v0*t + 0.5*a*t^2
        const s = v0 * t + 0.5 * a * t * t;
        
        // 誘答
        const w1 = v0 * t + a * t * t; // 忘記 0.5
        const w2 = v0 * t - 0.5 * a * t * t; // 減號錯誤
        const w3 = v0 * t + 0.5 * a * t; // 忘記平方
        
        const opts = shuffle([s, w1, w2, w3].map(n => n.toFixed(1) + " m"));

        return {
            type: 'skill',
            question: `一物體初速度為 ${v0} m/s，以 ${a} m/s² 的等加速度運動。請問 ${t} 秒後的位移為何？`,
            options: opts,
            answer: opts.indexOf(s.toFixed(1) + " m"),
            concept: "等加速運動",
            explanation: [`公式 S = v₀t + ½at² = ${v0}×${t} + 0.5×${a}×${t}² = ${s}`]
        };
    }

    // 2. 牛頓第二定律
    function physics_force(ctx, rnd) {
        const m = Math.floor(rnd() * 10) + 1;
        const f = Math.floor(rnd() * 20) + 10;
        const a = f / m;
        
        const ans = a.toFixed(1);
        const w1 = (m / f).toFixed(1);
        const w2 = (f * m).toFixed(1);
        const w3 = (f - m).toFixed(1);

        const opts = shuffle([ans, w1, w2, w3].map(n => n + " m/s²"));

        return {
            type: 'concept',
            question: `質量 ${m} kg 的物體受 ${f} N 的合力作用，其加速度大小為何？`,
            options: opts,
            answer: opts.indexOf(ans + " m/s²"),
            concept: "牛頓第二定律",
            explanation: [`F = ma => a = F/m = ${f}/${m} = ${ans}`]
        };
    }

    global.RigorousGenerator.registerTemplate('physics_kinematics', physics_kinematics);
    global.RigorousGenerator.registerTemplate('physics_force', physics_force);

})(this);