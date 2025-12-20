// templates_geography_core.js
// 地理（地形氣候、人地互動、地圖判讀、資源與永續）5 類模板
(function(global){
  'use strict';
  if (!global.RigorousGenerator) throw new Error('RigorousGenerator not found.');

  function sample(arr, rnd){ return arr[Math.floor(rnd()*arr.length)]; }

  // 1) geo_physical: 地形與地貌（概念判斷）
  function geo_physical(ctx, rnd){
    const opts = ['板塊運動','風化作用','光合作用','電離作用'];
    return {
      question: '造成山脈形成的主要地質過程為何？',
      options: opts,
      answer: 0,
      explanation: ['山脈多由板塊擠壓或碰撞抬升形成，屬於板塊構造作用。']
    };
  }

  // 2) geo_climate: 氣候與天氣（因果與判讀）
  function geo_climate(ctx, rnd){
    return {
      question: '若某地區年降雨量顯著減少，最可能的影響為何？',
      options: ['農業減產與水資源短缺','海平面上升','地震頻繁','火山爆發'],
      answer: 0,
      explanation: ['降雨減少直接影響農業灌溉與水資源供應，進而影響糧食生產。']
    };
  }

  // 3) geo_human_environment: 人地互動與都市化（案例分析）
  function geo_human_environment(ctx, rnd){
    return {
      question: '都市化快速擴張常帶來哪三項主要問題？',
      options: ['交通擁擠、空氣污染、綠地減少','海洋酸化、火山爆發、地震','森林再生、物種增加、空氣清新','無影響'],
      answer: 0,
      explanation: ['都市化常伴隨基礎設施壓力、污染與生態空間喪失。']
    };
  }

  // 4) geo_map_reading: 地圖判讀（比例尺、方向、等高線）
  function geo_map_reading(ctx, rnd){
    return {
      question: '地圖上等高線密集表示地形的哪一特徵？',
      options: ['坡度陡峭','坡度平緩','水域','植被豐富'],
      answer: 0,
      explanation: ['等高線密集代表高度變化快，表示坡度陡峭。']
    };
  }

  // 5) geo_resources: 資源與永續（評估與政策）
  function geo_resources(ctx, rnd){
    return {
      question: '在規劃水資源管理政策時，下列哪一項最重要？',
      options: ['整合供需管理與長期監測','只增加供水設施','忽略用水效率','只依賴降雨預測'],
      answer: 0,
      explanation: ['永續管理需同時考量供給、需求、效率與長期監測與調適。']
    };
  }

  global.RigorousGenerator.registerTemplate('geo_physical', geo_physical);
  global.RigorousGenerator.registerTemplate('geo_climate', geo_climate);
  global.RigorousGenerator.registerTemplate('geo_human_environment', geo_human_environment);
  global.RigorousGenerator.registerTemplate('geo_map_reading', geo_map_reading);
  global.RigorousGenerator.registerTemplate('geo_resources', geo_resources);

})(typeof window !== 'undefined' ? window : global);
