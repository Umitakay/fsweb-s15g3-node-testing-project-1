const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  // test('[3] verilen propu trimliyor', () => {})
  test('[3] verilen propu trimliyor', () => {
    const input = { isim: '  foo ', bar: ' bar ', baz: ' baz' }
    const expected = { isim: 'foo', bar: ' bar ', baz: ' baz' }
    const actual = utils.verileniTrimle(input, 'isim')
    expect(actual).toEqual(expected)
  });

  test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
    const input = { foo: ' foo ', bar: ' bar   ', baz: ' baz' }
    const expected = { foo: ' foo ', bar: 'bar', baz: ' baz' }
    const actual = utils.verileniTrimle(input, 'bar')
    expect(actual.foo).toEqual(expected.foo)
    expect(actual.baz).toEqual(expected.baz)
    expect(actual.bar).toEqual(expected.bar)
  });
  // test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {})

})

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  // test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {})
  test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]
    const expected = 3
    const actual = utils.enBuyukTamsayiyiBul(input)
    expect(actual).toEqual(expected)
  });
})

describe('[Görev 4] Sayici', () => {
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })
  // test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {})
  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
    const expected = 3;
    const actual = sayici.sayacDeger();
    expect(actual).toEqual(expected)
  })
  // test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {})
  test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {
    const expected = 2;
    const actual = sayici.asagiSay();
    expect(actual).toEqual(expected)
  })
  // test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {})
  test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    const expected = 0;
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    const actual = sayici.asagiSay();
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler
  beforeEach(() => {
    mevsimler = new utils.Mevsimler() // her test yeni bir mevsimle başlar
  })
  // test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {})
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    expected = 'yaz';
    mevsimler.sonraki();
    actual = mevsimler.actual();
    expect(actual).toEqual(expected)
  })
  // test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {})
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    expected = 'sonbahar';
    let actual = '';
    const adet = 2;
    for (let i = 0; i < adet; i++) {
      actual = mevsimler.sonraki()
    }
    expect(actual).toEqual(expected)
  })
  // test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {})
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    expected = 'kış';
    let actual = '';
    const adet = 3;
    for (let i = 0; i < adet; i++) {
      actual = mevsimler.sonraki()
    }
    expect(actual).toEqual(expected)
  })
  // test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    expected = 'ilkbahar';
    let actual = '';
    const adet = 4;
    for (let i = 0; i < adet; i++) {
      actual = mevsimler.sonraki()
    }
    actual = mevsimler.actual();
    expect(actual).toEqual(expected)
  })
  // test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {})
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    expected = 'yaz';
    let actual = '';
    const adet = 5;
    for (let i = 0; i < adet; i++) {
      actual = mevsimler.sonraki()
    }
    expect(actual).toEqual(expected)
  })
  // test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {})
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    const expected = 'ilkbahar'
    let actual = '';
    const adet = 40;
    for (let i = 0; i < adet; i++) {
      actual = mevsimler.sonraki()
    }
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 6] Araba', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30) // her test yeni bir araba oluşturur
  })
  // test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {})
  test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    const expected = 20;
    focus.sur(20);
    const actual = focus.odometer;
    expect(actual).toEqual(expected)
  })
  // test('[16] arabayı sürmek benzin tüketiyor', () => {})
  test('[16] arabayı sürmek benzin tüketiyor', () => {
    const expected = 18;
    focus.sur(60);
    const actual = focus.benzin();
    expect(actual).toEqual(expected)
  })
  // test('[17] benzinalma arabayı sürmeye izin veriyor', () => {})
  test('[17] benzinalma arabayı sürmeye izin veriyor', () => {
    const expected1 = 600;
    focus.sur(600);
    expect(focus.odometer).toEqual(expected1)

    const expected2 = 600;
    focus.sur(1);
    expect(focus.odometer).toEqual(expected2)

    focus.benzinal(20);
    focus.sur(10);
    const expected3 = 610;
    expect(focus.odometer).toEqual(expected3)

  })
  // test('[18] dolu depoya benzin alma etki etmiyor', () => {})
  test('[18] dolu depoya benzin alma etki etmiyor', () => {
    const expected = 20;
    focus.benzinal(20);
    const actual = focus.benzin();
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 7] asenkronCiftSayi', () => {
  // test('[19] bir çift sayı verilirse true çözümlüyor', () => {})
  test('[19] bir çift sayı verilirse true çözümlüyor', () => {
    const expected = true;
    const actual = utils.asenkronCiftSayi(200);
    actual.then((value) => {
      expect(value).toEqual(expected)
    })
  })
  // test('[20] tek sayı verilirse false çözümlüyor', () => {})
  test('[20] tek sayı verilirse false çözümlüyor', () => {
    const expected = false;
    const actual = utils.asenkronCiftSayi(201);
    actual.then((value) => {
      expect(value).toEqual(expected)
    })
  })
})
