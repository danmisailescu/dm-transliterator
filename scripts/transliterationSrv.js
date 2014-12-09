var romanianChyrilicAndGreekModule = angular.module("romanianChyrilicAndGreek");
romanianChyrilicAndGreekModule.factory('transliterationSrv',
    [function () {

        function createRomanianLettersDictionaryAndGreekCorespondent() {
            var corespondingLetter = [];
            corespondingLetter['a'] = 'α';

            corespondingLetter['avg'] = 'αυγ';
            corespondingLetter['avdh'] = 'αυδ';
            corespondingLetter['avl'] = 'αυλ';
            corespondingLetter['avm'] = 'αυμ';
            corespondingLetter['avn'] = 'αυν';
            corespondingLetter['avr'] = 'αυρ';

            corespondingLetter['afc'] = 'αυκ';
            corespondingLetter['afp'] = 'αυπ';
            corespondingLetter['aft'] = 'αυτ';
            corespondingLetter['afh'] = 'αυχ';
            corespondingLetter['afth'] = 'αυθ';
            corespondingLetter['afs'] = 'αυς';
            corespondingLetter['afz'] = 'αυζ';


            corespondingLetter['ă'] = 'α';
            corespondingLetter['â'] = 'α';
            corespondingLetter['b'] = 'μπ';
            corespondingLetter['mb'] = 'μπ';
            corespondingLetter['c'] = 'κ';
            corespondingLetter['che'] = 'και';
            corespondingLetter['Che'] = 'Και';
            corespondingLetter['CHE'] = 'ΚΑΙ';

            corespondingLetter['chi'] = 'κι';
            corespondingLetter['Chi'] = 'Κι';
            corespondingLetter['CHI'] = 'ΚΙ';

            corespondingLetter['d'] = 'ντ';
            corespondingLetter['nd'] = 'ντ';
            corespondingLetter['nD'] = 'ντ';
            corespondingLetter['e'] = 'ε';
            corespondingLetter['f'] = 'φ';
            corespondingLetter['g'] = 'γ';
            corespondingLetter['gh'] = 'γ';
            corespondingLetter['gH'] = 'γ';
            corespondingLetter['ghe'] = 'γε';
            corespondingLetter['gHe'] = 'γε';
            corespondingLetter['ghE'] = 'γε';
            corespondingLetter['Ghe'] = 'Γε';
            corespondingLetter['GHE'] = 'ΓΕ';

            corespondingLetter['ghi'] = 'γι';
            corespondingLetter['gHi'] = 'γι';
            corespondingLetter['ghI'] = 'γι';
            corespondingLetter['Ghi'] = 'Γι';
            corespondingLetter['GHI'] = 'ΓΙ';

            corespondingLetter['h'] = 'χ';
            corespondingLetter['i'] = 'ι';
            corespondingLetter['î'] = 'ι';
            corespondingLetter['j'] = 'δζ';
            corespondingLetter['k'] = 'κ';
            corespondingLetter['l'] = 'λ';
            corespondingLetter['m'] = 'μ';
            corespondingLetter['n'] = 'ν';
            corespondingLetter['o'] = 'ο';
            corespondingLetter['p'] = 'π';
            corespondingLetter['pop'] = 'ποπ';
            corespondingLetter['q'] = 'κιου';
            corespondingLetter['r'] = 'ρ';
            corespondingLetter['s'] = 'σ';

            corespondingLetter['s '] = 'ς ';
            corespondingLetter['s.'] = 'ς.';
            corespondingLetter['s,'] = 'ς,';
            corespondingLetter['s!'] = 'ς!';
            corespondingLetter['s;'] = 'ς΄';
            corespondingLetter['s?'] = 'ς;';
            corespondingLetter['s)'] = 'ς)';
            corespondingLetter['s]'] = 'ς]';
            corespondingLetter['s}'] = 'ς}';
            corespondingLetter['s('] = 'ς(';
            corespondingLetter['s['] = 'ς[';
            corespondingLetter['s{'] = 'ς{';
            corespondingLetter['s-'] = 'ς-';
            corespondingLetter['s+'] = 'ς+';
            corespondingLetter['s_'] = 'ς_';
            corespondingLetter['s='] = 'ς=';
            corespondingLetter['s/'] = 'ς/';
            corespondingLetter['s>'] = 'ς>';
            corespondingLetter['s<'] = 'ς<';
            corespondingLetter['s|'] = 'ς|';
            corespondingLetter['s*'] = 'ς*';

            corespondingLetter['ș'] = 'σχ';
            corespondingLetter['ş'] = 'σχ';
            corespondingLetter['t'] = 'τ';
            corespondingLetter['th'] = 'θ';
            corespondingLetter['tH'] = 'θ';
            corespondingLetter['Th'] = 'Θ';
            corespondingLetter['TH'] = 'Θ';
            corespondingLetter['ț'] = 'τσ';
            corespondingLetter['ţ'] = 'τσ';
            corespondingLetter['u'] = 'ου';
            corespondingLetter['v'] = 'β';
            corespondingLetter['w'] = 'β';
            corespondingLetter['x'] = 'ξ';
            corespondingLetter['y'] = 'υ';
            corespondingLetter['z'] = 'ζ';
            corespondingLetter['A'] = 'Α';
            corespondingLetter['Avg'] = 'Αυγ';
            corespondingLetter['Avdh'] = 'Αυδ';
            corespondingLetter['Avl'] = 'Αυλ';
            corespondingLetter['Avm'] = 'Αυμ';
            corespondingLetter['Avn'] = 'Αυν';
            corespondingLetter['Avr'] = 'Αυρ';

            corespondingLetter['Afc'] = 'Αυκ';
            corespondingLetter['Afp'] = 'Αυπ';
            corespondingLetter['Aft'] = 'Αυτ';
            corespondingLetter['Afh'] = 'Αυχ';
            corespondingLetter['Afth'] = 'Αυθ';
            corespondingLetter['Afs'] = 'Αυς';
            corespondingLetter['Afz'] = 'Αυζ';

            corespondingLetter['AVG'] = 'ΑΥΓ';
            corespondingLetter['AVDH'] = 'ΑΥΔ';
            corespondingLetter['AVL'] = 'ΑΥΛ';
            corespondingLetter['AVM'] = 'ΑΥΜ';
            corespondingLetter['AVN'] = 'ΑΥΝ';
            corespondingLetter['AVR'] = 'ΑΥΡ';

            corespondingLetter['AFC'] = 'ΑΥΚ';
            corespondingLetter['AFP'] = 'ΑΥΠ';
            corespondingLetter['AFT'] = 'ΑΥΤ';
            corespondingLetter['AFH'] = 'ΑΥΧ';
            corespondingLetter['AFTH'] = 'ΑΥΘ';
            corespondingLetter['AFS'] = 'ΑΥΣ';
            corespondingLetter['AFZ'] = 'ΑΥΖ';


            corespondingLetter['Ă'] = 'Α';
            corespondingLetter['Â'] = 'Α';
            corespondingLetter['B'] = 'Μπ';
            corespondingLetter['Mb'] = 'Μπ';
            corespondingLetter['MB'] = 'ΜΠ';
            corespondingLetter['C'] = 'Κ';
            corespondingLetter['D'] = 'Ντ';
            corespondingLetter['Nd'] = 'Ντ';
            corespondingLetter['ND'] = 'ΝΤ';
            corespondingLetter['E'] = 'Ε';
            corespondingLetter['F'] = 'Φ';
            corespondingLetter['G'] = 'Γ';
            corespondingLetter['GH'] = 'Γ';
            corespondingLetter['Gh'] = 'Γ';
            corespondingLetter['H'] = 'Χ';
            corespondingLetter['I'] = 'Ι';
            corespondingLetter['Î'] = 'Ι';
            corespondingLetter['J'] = 'Δζ';
            corespondingLetter['K'] = 'Κ';
            corespondingLetter['L'] = 'Λ';
            corespondingLetter['M'] = 'Μ';
            corespondingLetter['N'] = 'Ν';
            corespondingLetter['O'] = 'Ο';
            corespondingLetter['P'] = 'Π';
            corespondingLetter['Q'] = 'Κιου';
            corespondingLetter['R'] = 'Ρ';
            corespondingLetter['S'] = 'Σ';
            corespondingLetter[' S '] = ' Σ ';
            corespondingLetter['Ș'] = 'Σχ';
            corespondingLetter['Ş'] = 'Σχ';
            corespondingLetter['T'] = 'Τ';
            corespondingLetter['Ț'] = 'Τσ';
            corespondingLetter['Ţ'] = 'Τσ';
            corespondingLetter['U'] = 'Ου';
            corespondingLetter['V'] = 'Β';
            corespondingLetter['W'] = 'Β';
            corespondingLetter['X'] = 'Ξ';
            corespondingLetter['Y'] = 'Υ';
            corespondingLetter['Z'] = 'Ζ';
            corespondingLetter['oi'] = 'όι';
            corespondingLetter['oI'] = 'όι';
            corespondingLetter['Oi'] = 'Όι';
            corespondingLetter['OI'] = 'ΌΙ';
            corespondingLetter['ou'] = 'όυ';
            corespondingLetter['ou'] = 'όυ';
            corespondingLetter['Ou'] = 'Όυ';
            corespondingLetter['OU'] = 'ΌΥ';
            corespondingLetter['?'] = ';';
            corespondingLetter[';'] = '΄';
            return corespondingLetter;

        }

        function createRomanianLettersDictionaryAndChyrilicCorespondent() {
            var corespondingLetter = [];
            corespondingLetter['a'] = 'а';
            corespondingLetter['A'] = 'А';
            corespondingLetter['ă'] = 'э';
            corespondingLetter['Ă'] = 'Э';
            corespondingLetter['â'] = 'ы';
            corespondingLetter['Â'] = 'Ы';
            corespondingLetter['b'] = 'б';
            corespondingLetter['B'] = 'Б';

            corespondingLetter['c'] = 'к';
            corespondingLetter['C'] = 'К';

            corespondingLetter['chi'] = 'ки';
            corespondingLetter['Chi'] = 'Ки';
            corespondingLetter['cHi'] = 'ки';
            corespondingLetter['CHi'] = 'Ки';
            corespondingLetter['chI'] = 'кИ';
            corespondingLetter['ChI'] = 'КИ';
            corespondingLetter['cHI'] = 'кИ';
            corespondingLetter['CHI'] = 'КИ';

            corespondingLetter['che'] = 'ке';
            corespondingLetter['Che'] = 'Ке';
            corespondingLetter['cHe'] = 'ке';
            corespondingLetter['CHe'] = 'Ке';
            corespondingLetter['chE'] = 'кЕ';
            corespondingLetter['ChE'] = 'КЕ';
            corespondingLetter['cHE'] = 'кЕ';
            corespondingLetter['CHE'] = 'КЕ';

            corespondingLetter['d'] = 'д';
            corespondingLetter['D'] = 'Д';

            corespondingLetter['e'] = 'е';
            corespondingLetter['E'] = 'Е';

            corespondingLetter['aie'] = 'ае';
            corespondingLetter['ăie'] = 'эе';
            corespondingLetter['âie'] = 'ые';
            corespondingLetter['îie'] = 'ые';
            corespondingLetter['eie'] = 'ее';
            corespondingLetter['iie'] = 'ие';
            corespondingLetter['oie'] = 'ое';
            corespondingLetter['uie'] = 'уе';

            corespondingLetter['Aie'] = 'Ае';
            corespondingLetter['Ăie'] = 'Эе';
            corespondingLetter['Âie'] = 'Ые';
            corespondingLetter['Îie'] = 'Ые';
            corespondingLetter['Eie'] = 'Ее';
            corespondingLetter['Iie'] = 'Ие';
            corespondingLetter['Oie'] = 'Ое';
            corespondingLetter['Uie'] = 'Уе';

            corespondingLetter['AIE'] = 'АЕ';
            corespondingLetter['ĂIE'] = 'ЭЕ';
            corespondingLetter['ÂIE'] = 'ЫЕ';
            corespondingLetter['ÎIE'] = 'ЫЕ';
            corespondingLetter['EIE'] = 'ЕЕ';
            corespondingLetter['IIE'] = 'ИЕ';
            corespondingLetter['OIE'] = 'ОЕ';
            corespondingLetter['UIE'] = 'УЕ';

            corespondingLetter['bea'] = 'бя';
            corespondingLetter['cea'] = 'кя';
            corespondingLetter['dea'] = 'дя';
            corespondingLetter['eea'] = 'ея';
            corespondingLetter['fea'] = 'фя';
            corespondingLetter['gea'] = 'гя';
            corespondingLetter['hea'] = 'хя';
            corespondingLetter['jea'] = 'жя';
            corespondingLetter['kea'] = 'кя';
            corespondingLetter['lea'] = 'ля';
            corespondingLetter['mea'] = 'мя';
            corespondingLetter['nea'] = 'ня';
            corespondingLetter['pea'] = 'пя';
            corespondingLetter['rea'] = 'ря';
            corespondingLetter['sea'] = 'ся';
            corespondingLetter['șea'] = 'шя';
            corespondingLetter['şea'] = 'шя';
            corespondingLetter['tea'] = 'тя';
            corespondingLetter['țea'] = 'ця';
            corespondingLetter['ţea'] = 'ця';
            corespondingLetter['vea'] = 'вя';
            corespondingLetter['xea'] = 'икся';
            corespondingLetter['yea'] = 'ия';
            corespondingLetter['zea'] = 'зя';

            corespondingLetter['Bea'] = 'Бя';
            corespondingLetter['Cea'] = 'Кя';
            corespondingLetter['Dea'] = 'Дя';
            corespondingLetter['Eea'] = 'Ея';
            corespondingLetter['Fea'] = 'Фя';
            corespondingLetter['Gea'] = 'Гя';
            corespondingLetter['Hea'] = 'Хя';
            corespondingLetter['Jea'] = 'Жя';
            corespondingLetter['Kea'] = 'Кя';
            corespondingLetter['Lea'] = 'Ля';
            corespondingLetter['Mea'] = 'Мя';
            corespondingLetter['Nea'] = 'Ня';
            corespondingLetter['Pea'] = 'Пя';
            corespondingLetter['Rea'] = 'Ря';
            corespondingLetter['Sea'] = 'Ся';
            corespondingLetter['Șea'] = 'Шя';
            corespondingLetter['Şea'] = 'Шя';
            corespondingLetter['Tea'] = 'Тя';
            corespondingLetter['Țea'] = 'Ця';
            corespondingLetter['Ţea'] = 'Ця';
            corespondingLetter['Vea'] = 'Вя';
            corespondingLetter['Xea'] = 'Икся';
            corespondingLetter['Yea'] = 'Ия';
            corespondingLetter['Zea'] = 'Зя';


            corespondingLetter['BEA'] = 'БЯ';
            corespondingLetter['CEA'] = 'КЯ';
            corespondingLetter['DEA'] = 'ДЯ';
            corespondingLetter['EEA'] = 'ЕЯ';
            corespondingLetter['FEA'] = 'ФЯ';
            corespondingLetter['GEA'] = 'ГЯ';
            corespondingLetter['HEA'] = 'ХЯ';
            corespondingLetter['JEA'] = 'ЖЯ';
            corespondingLetter['KEA'] = 'КЯ';
            corespondingLetter['LEA'] = 'ЛЯ';
            corespondingLetter['MEA'] = 'МЯ';
            corespondingLetter['NEA'] = 'НЯ';
            corespondingLetter['PEA'] = 'ПЯ';
            corespondingLetter['REA'] = 'РЯ';
            corespondingLetter['SEA'] = 'СЯ';
            corespondingLetter['ȘEA'] = 'ШЯ';
            corespondingLetter['ŞEA'] = 'ШЯ';
            corespondingLetter['TEA'] = 'ТЯ';
            corespondingLetter['ȚEA'] = 'ЦЯ';
            corespondingLetter['ŢEA'] = 'ЦЯ';
            corespondingLetter['VEA'] = 'ВЯ';
            corespondingLetter['XEA'] = 'ИКСЯ';
            corespondingLetter['YEA'] = 'ИЯ';
            corespondingLetter['ZEA'] = 'ЗЯ';



            corespondingLetter['f'] = 'ф';
            corespondingLetter['F'] = 'Ф';

            corespondingLetter['g'] = 'г';
            corespondingLetter['G'] = 'Г';

            corespondingLetter['gi'] = 'ӂи';
            corespondingLetter['Gi'] = 'Ӂи';
            corespondingLetter['gI'] = 'ӂИ';
            corespondingLetter['GI'] = 'ӁИ';

            corespondingLetter['ge'] = 'ӂе';
            corespondingLetter['Ge'] = 'Ӂе';
            corespondingLetter['gE'] = 'ӂЕ';
            corespondingLetter['GE'] = 'ӁЕ';

            corespondingLetter['ghi'] = 'ги';
            corespondingLetter['Ghi'] = 'Ги';
            corespondingLetter['gHi'] = 'ги';
            corespondingLetter['GHi'] = 'Ги';
            corespondingLetter['ghI'] = 'гИ';
            corespondingLetter['GhI'] = 'ГИ';
            corespondingLetter['gHI'] = 'гИ';
            corespondingLetter['GHI'] = 'ГИ';

            corespondingLetter['ghe'] = 'ге';
            corespondingLetter['Ghe'] = 'Ге';
            corespondingLetter['gHe'] = 'ге';
            corespondingLetter['GHe'] = 'Ге';
            corespondingLetter['ghE'] = 'гЕ';
            corespondingLetter['GhE'] = 'ГЕ';
            corespondingLetter['gHE'] = 'гЕ';
            corespondingLetter['GHE'] = 'ГЕ';

            corespondingLetter['h'] = 'х';
            corespondingLetter['H'] = 'Х';

            corespondingLetter['i'] = 'и';
            corespondingLetter['I'] = 'И';

            corespondingLetter['ai'] = 'ай';
            corespondingLetter['ăi'] = 'эй';
            corespondingLetter['âi'] = 'ый';
            corespondingLetter['îi'] = 'ый';
            corespondingLetter['ei'] = 'ей';
            corespondingLetter['ii'] = 'ий';
            corespondingLetter['oi'] = 'ой';
            corespondingLetter['ui'] = 'уй';

            corespondingLetter['Ai'] = 'Ай';
            corespondingLetter['Ăi'] = 'Эй';
            corespondingLetter['Âi'] = 'Ый';
            corespondingLetter['Îi'] = 'Ый';
            corespondingLetter['Ei'] = 'Ей';
            corespondingLetter['Ii'] = 'Ий';
            corespondingLetter['Oi'] = 'Ой';
            corespondingLetter['Ui'] = 'Уй';

            corespondingLetter['AI'] = 'АЙ';
            corespondingLetter['Ăi'] = 'ЭЙ';
            corespondingLetter['ÂI'] = 'ЫЙ';
            corespondingLetter['ÎI'] = 'ЫЙ';
            corespondingLetter['EI'] = 'ЕЙ';
            corespondingLetter['II'] = 'ИЙ';
            corespondingLetter['OI'] = 'ОЙ';
            corespondingLetter['UI'] = 'УЙ';

            corespondingLetter['iă'] = 'йэ';
            corespondingLetter['iâ'] = 'йы';
            corespondingLetter['iî'] = 'йы';
            corespondingLetter['ie'] = 'йе';
            corespondingLetter['io'] = 'йо';
            corespondingLetter['iu'] = 'йу';

            corespondingLetter['iĂ'] = 'йЭ';
            corespondingLetter['iÂ'] = 'йЫ';
            corespondingLetter['iÎ'] = 'йЫ';
            corespondingLetter['iE'] = 'йЕ';
            corespondingLetter['iO'] = 'йО';
            corespondingLetter['iU'] = 'йУ';

            corespondingLetter['IĂ'] = 'ЙЭ';
            corespondingLetter['IÂ'] = 'ЙЫ';
            corespondingLetter['IÎ'] = 'ЙЫ';
            corespondingLetter['IE'] = 'ЙЕ';
            corespondingLetter['IO'] = 'ЙО';
            corespondingLetter['IU'] = 'ЙУ';

            corespondingLetter['aia'] = 'ая';
            corespondingLetter['ăia'] = 'эя';
            corespondingLetter['âia'] = 'ыя';
            corespondingLetter['îia'] = 'ыя';
            corespondingLetter['iia'] = 'ия';
            corespondingLetter['oia'] = 'оя';
            corespondingLetter['uia'] = 'уя';

            corespondingLetter['Aia'] = 'Ая';
            corespondingLetter['Ăia'] = 'Эя';
            corespondingLetter['Âia'] = 'Ыя';
            corespondingLetter['Îia'] = 'Ыя';
            corespondingLetter['Iia'] = 'Ия';
            corespondingLetter['Oia'] = 'Оя';
            corespondingLetter['Uia'] = 'Уя';

            corespondingLetter['AIA'] = 'Ая';
            corespondingLetter['ĂIA'] = 'Эя';
            corespondingLetter['ÂIA'] = 'Ыя';
            corespondingLetter['ÎIA'] = 'Ыя';
            corespondingLetter['IIA'] = 'Ия';
            corespondingLetter['OIA'] = 'Оя';
            corespondingLetter['UIA'] = 'Уя';


            corespondingLetter['iu'] = 'ю';
            corespondingLetter['iU'] = 'ю';
            corespondingLetter['Iu'] = 'Ю';
            corespondingLetter['IU'] = 'Ю';

            corespondingLetter['î'] = 'ы';
            corespondingLetter['Î'] = 'Ы';
            corespondingLetter['j'] = 'ж';
            corespondingLetter['J'] = 'Ж';

            corespondingLetter['k'] = 'к';
            corespondingLetter['K'] = 'К';

            corespondingLetter['khi'] = 'ки';
            corespondingLetter['Khi'] = 'Ки';
            corespondingLetter['kHi'] = 'ки';
            corespondingLetter['KHi'] = 'Ки';
            corespondingLetter['khI'] = 'кИ';
            corespondingLetter['KhI'] = 'КИ';
            corespondingLetter['kHI'] = 'кИ';
            corespondingLetter['KHI'] = 'КИ';

            corespondingLetter['khe'] = 'ке';
            corespondingLetter['Khe'] = 'Ке';
            corespondingLetter['kHe'] = 'ке';
            corespondingLetter['KHe'] = 'Ке';
            corespondingLetter['khE'] = 'кЕ';
            corespondingLetter['KhE'] = 'КЕ';
            corespondingLetter['kHE'] = 'кЕ';
            corespondingLetter['KHE'] = 'КЕ';

            corespondingLetter['l'] = 'л';
            corespondingLetter['L'] = 'Л';
            corespondingLetter['m'] = 'м';
            corespondingLetter['M'] = 'М';
            corespondingLetter['n'] = 'н';
            corespondingLetter['N'] = 'Н';
            corespondingLetter['o'] = 'о';
            corespondingLetter['O'] = 'О';
            corespondingLetter['p'] = 'п';
            corespondingLetter['pop'] = 'поп';
            corespondingLetter['P'] = 'П';
            corespondingLetter['q'] = 'кю';
            corespondingLetter['Q'] = 'КЮ';
            corespondingLetter['r'] = 'р';
            corespondingLetter['R'] = 'Р';
            corespondingLetter['s'] = 'с';
            corespondingLetter['S'] = 'С';
            corespondingLetter['ș'] = 'ш';
            corespondingLetter['ş'] = 'ш';
            corespondingLetter['Ș'] = 'Ш';
            corespondingLetter['Ş'] = 'Ш';
            corespondingLetter['t'] = 'т';
            corespondingLetter['T'] = 'Т';
            corespondingLetter['ț'] = 'ц';
            corespondingLetter['ţ'] = 'ц';
            corespondingLetter['Ț'] = 'Ц';
            corespondingLetter['Ţ'] = 'Ц';
            corespondingLetter['u'] = 'у';
            corespondingLetter['U'] = 'У';
            corespondingLetter['v'] = 'в';
            corespondingLetter['V'] = 'В';
            corespondingLetter['w'] = 'в';
            corespondingLetter['W'] = 'В';
            corespondingLetter['x'] = 'икс';
            corespondingLetter['X'] = 'ИКС';
            corespondingLetter['y'] = 'и';
            corespondingLetter['Y'] = 'И';
            corespondingLetter['z'] = 'з';
            corespondingLetter['Z'] = 'З';

            return corespondingLetter;
        }

        function createChyrilicLettersDictionaryAndRomanianCorespondent() {
            var corespondingLetter = [];
            corespondingLetter['А'] = 'A';
            corespondingLetter['а'] = 'a';
            corespondingLetter['Б'] = 'B';
            corespondingLetter['б'] = 'b';
            corespondingLetter['В'] = 'V';
            corespondingLetter['в'] = 'v';

            corespondingLetter['Г'] = 'G';
            corespondingLetter['г'] = 'g';

            corespondingLetter['ГЕ'] = 'GHE';
            corespondingLetter['Ге'] = 'Ghe';

            corespondingLetter['ге'] = 'ghe';
            corespondingLetter['гЕ'] = 'ghe';

            corespondingLetter['ГИ'] = 'GHI';
            corespondingLetter['ГЙ'] = 'GHI';
            corespondingLetter['ГЬ'] = 'GHI';
            corespondingLetter['ГЮ'] = 'GHIU';
            corespondingLetter['Ги'] = 'Ghi';
            corespondingLetter['Гй'] = 'Ghi';
            corespondingLetter['Гь'] = 'Ghi';
            corespondingLetter['Гю'] = 'Ghiu';

            corespondingLetter['гИ'] = 'ghi';
            corespondingLetter['гЙ'] = 'ghi';
            corespondingLetter['гЬ'] = 'ghi';
            corespondingLetter['гЮ'] = 'ghiu';
            corespondingLetter['ги'] = 'ghi';
            corespondingLetter['гй'] = 'ghi';
            corespondingLetter['гь'] = 'ghi';
            corespondingLetter['гю'] = 'ghiu';


            corespondingLetter['Д'] = 'D';
            corespondingLetter['д'] = 'd';
            corespondingLetter['Е'] = 'E';
            corespondingLetter['е'] = 'e';

            corespondingLetter['АЕ'] = 'AIE';
            corespondingLetter['аЕ'] = 'aie';
            corespondingLetter['ЕЕ'] = 'EIE';
            corespondingLetter['еЕ'] = 'eie';
            corespondingLetter['ЯЕ'] = 'IAIE';
            corespondingLetter['яЕ'] = 'iaie';
            corespondingLetter['ЮЕ'] = 'IUIE';
            corespondingLetter['юЕ'] = 'iuie';
            corespondingLetter['ИЕ'] = 'IE';
            corespondingLetter['иЕ'] = 'ie';
            corespondingLetter['ЙЕ'] = 'IE';
            corespondingLetter['йЕ'] = 'ie';
            corespondingLetter['ОЕ'] = 'OIE';
            corespondingLetter['оЕ'] = 'oie';
            corespondingLetter['УЕ'] = 'UIE';
            corespondingLetter['уЕ'] = 'uie';

            corespondingLetter['ЫЕ'] = 'ÂIE';
            corespondingLetter['ыЕ'] = 'âie';

            corespondingLetter['ЬЕ'] = 'IE';
            corespondingLetter['ьЕ'] = 'ie';
            corespondingLetter['ЭЕ'] = 'ĂIE';
            corespondingLetter['эЕ'] = 'ăie';


            corespondingLetter['Ае'] = 'Aie';
            corespondingLetter['ае'] = 'aie';
            corespondingLetter['Ее'] = 'Eie';
            corespondingLetter['ее'] = 'eie';
            corespondingLetter['Яе'] = 'Iaie';
            corespondingLetter['яе'] = 'iaie';
            corespondingLetter['Юе'] = 'Iuie';
            corespondingLetter['юе'] = 'iuie';
            corespondingLetter['Ие'] = 'Ie';
            corespondingLetter['ие'] = 'ie';
            corespondingLetter['Йе'] = 'Ie';
            corespondingLetter['йе'] = 'ie';
            corespondingLetter['Ое'] = 'Oie';
            corespondingLetter['ое'] = 'oie';
            corespondingLetter['Уе'] = 'Uie';
            corespondingLetter['уе'] = 'uie';

            corespondingLetter['Ье'] = 'Ie';
            corespondingLetter['ье'] = 'ie';
            corespondingLetter['Эе'] = 'Ăie';
            corespondingLetter['эе'] = 'ăie';

            corespondingLetter['Ые'] = 'Âie';
            corespondingLetter['ые'] = 'âie';

            corespondingLetter[' ые'] = ' îie';
            corespondingLetter['\nые'] = '\nîie';
            corespondingLetter['.ые'] = '.îie';
            corespondingLetter[',ые'] = ',îie';
            corespondingLetter['?ые'] = '?îie';
            corespondingLetter['!ые'] = '!îie';
            corespondingLetter[']ые'] = ']îie';
            corespondingLetter['[ые'] = '[îie';
            corespondingLetter['(ые'] = '(îie';
            corespondingLetter[')ые'] = ')îie';
            corespondingLetter['|ые'] = '|îie';
            corespondingLetter['/ые'] = '/îie';
            corespondingLetter['>ые'] = '>îie';
            corespondingLetter[';ые'] = ';îie';
            corespondingLetter['-ые'] = '-îie';
            corespondingLetter['_ые'] = '_îie';
            corespondingLetter['=ые'] = '=îie';
            corespondingLetter['+ые'] = '+îie';
            corespondingLetter['"ые'] = '"îie';
            corespondingLetter['}ые'] = 'îie';
            corespondingLetter['{ые'] = 'îie';
            corespondingLetter['#ые'] = '#îie';
            corespondingLetter['&ые'] = '&îie';
            corespondingLetter['*ые'] = '*îie';

            corespondingLetter[' ЫЕ'] = ' ÎIE';
            corespondingLetter['\nЫЕ'] = '\nÎIE';
            corespondingLetter['.ЫЕ'] = '.ÎIE';
            corespondingLetter[',ЫЕ'] = ',ÎIE';
            corespondingLetter['?ЫЕ'] = '?ÎIE';
            corespondingLetter['!ЫЕ'] = '!ÎIE';
            corespondingLetter[']ЫЕ'] = ']ÎIE';
            corespondingLetter['[ЫЕ'] = '[ÎIE';
            corespondingLetter['(ЫЕ'] = '(ÎIE';
            corespondingLetter[')ЫЕ'] = ')ÎIE';
            corespondingLetter['|ЫЕ'] = '|ÎIE';
            corespondingLetter['/ЫЕ'] = '/ÎIE';
            corespondingLetter['>ЫЕ'] = '>ÎIE';
            corespondingLetter[';ЫЕ'] = ';ÎIE';
            corespondingLetter['-ЫЕ'] = '-ÎIE';
            corespondingLetter['_ЫЕ'] = '_ÎIE';
            corespondingLetter['=ЫЕ'] = '=ÎIE';
            corespondingLetter['+ЫЕ'] = '+ÎIE';
            corespondingLetter['"ЫЕ'] = '"ÎIE';
            corespondingLetter['}ЫЕ'] = 'ÎIE';
            corespondingLetter['{ЫЕ'] = 'ÎIE';
            corespondingLetter['#ЫЕ'] = '#ÎIE';
            corespondingLetter['&ЫЕ'] = '&ÎIE';
            corespondingLetter['*ЫЕ'] = '*ÎIE';


            corespondingLetter['Ж'] = 'J';
            corespondingLetter['ж'] = 'j';
            corespondingLetter['Ӂ'] = 'G';
            corespondingLetter['ӂ'] = 'g';
            corespondingLetter['З'] = 'Z';
            corespondingLetter['з'] = 'z';
            corespondingLetter['И'] = 'I';
            corespondingLetter['и'] = 'i';
            corespondingLetter['Й'] = 'I';
            corespondingLetter['й'] = 'i';

            corespondingLetter['К'] = 'C';
            corespondingLetter['к'] = 'c';

            corespondingLetter['КЕ'] = 'CHE';
            corespondingLetter['Ке'] = 'Che';

            corespondingLetter['ке'] = 'che';
            corespondingLetter['кЕ'] = 'che';

            corespondingLetter['КИ'] = 'CHI';
            corespondingLetter['КЙ'] = 'CHI';
            corespondingLetter['КЬ'] = 'CHI';
            corespondingLetter['КЮ'] = 'CHIU';
            corespondingLetter['Ки'] = 'Chi';
            corespondingLetter['Кй'] = 'Chi';
            corespondingLetter['Кь'] = 'Chi';
            corespondingLetter['Кю'] = 'Chiu';

            corespondingLetter['кИ'] = 'chi';
            corespondingLetter['кЙ'] = 'chi';
            corespondingLetter['кЬ'] = 'chi';
            corespondingLetter['кЮ'] = 'chiu';
            corespondingLetter['ки'] = 'chi';
            corespondingLetter['кй'] = 'chi';
            corespondingLetter['кь'] = 'chi';
            corespondingLetter['кю'] = 'chiu';

            corespondingLetter['Л'] = 'L';
            corespondingLetter['л'] = 'l';
            corespondingLetter['М'] = 'M';
            corespondingLetter['м'] = 'm';
            corespondingLetter['Н'] = 'N';
            corespondingLetter['н'] = 'n';
            corespondingLetter['О'] = 'O';
            corespondingLetter['о'] = 'o';
            corespondingLetter['П'] = 'P';
            corespondingLetter['п'] = 'p';
            corespondingLetter['Р'] = 'R';
            corespondingLetter['р'] = 'r';
            corespondingLetter['С'] = 'S';
            corespondingLetter['с'] = 's';
            corespondingLetter['Т'] = 'T';
            corespondingLetter['т'] = 't';
            corespondingLetter['У'] = 'U';
            corespondingLetter['у'] = 'u';
            corespondingLetter['Ф'] = 'F';
            corespondingLetter['ф'] = 'f';
            corespondingLetter['Х'] = 'H';
            corespondingLetter['х'] = 'h';
            corespondingLetter['Ц'] = 'Ț';
            corespondingLetter['ц'] = 'ț';
            corespondingLetter['Ч'] = 'C';
            corespondingLetter['ч'] = 'c';
            corespondingLetter['Ш'] = 'Ș';
            corespondingLetter['ш'] = 'ș';
            corespondingLetter['Ы'] = 'Â';
            corespondingLetter['ы'] = 'â';

            corespondingLetter[' ы'] = ' î';
            corespondingLetter['\nы'] = '\nî';
            corespondingLetter['.ы'] = '.î';
            corespondingLetter[',ы'] = ',î';
            corespondingLetter['?ы'] = '?î';
            corespondingLetter['!ы'] = '!î';
            corespondingLetter[']ы'] = ']î';
            corespondingLetter['[ы'] = '[î';
            corespondingLetter['(ы'] = '(î';
            corespondingLetter[')ы'] = ')î';
            corespondingLetter['|ы'] = '|î';
            corespondingLetter['/ы'] = '/î';
            corespondingLetter['>ы'] = '>î';
            corespondingLetter[';ы'] = ';î';
            corespondingLetter['-ы'] = '-î';
            corespondingLetter['_ы'] = '_î';
            corespondingLetter['=ы'] = '=î';
            corespondingLetter['+ы'] = '+î';
            corespondingLetter['"ы'] = '"î';
            corespondingLetter['}ы'] = 'î';
            corespondingLetter['{ы'] = 'î';
            corespondingLetter['#ы'] = '#î';
            corespondingLetter['&ы'] = '&î';
            corespondingLetter['*ы'] = '*î';

            corespondingLetter[' Ы'] = ' Î';
            corespondingLetter['\nЫ'] = '\nÎ';
            corespondingLetter['.Ы'] = '.Î';
            corespondingLetter[',Ы'] = ',Î';
            corespondingLetter['?Ы'] = '?Î';
            corespondingLetter['!Ы'] = '!Î';
            corespondingLetter[']Ы'] = ']Î';
            corespondingLetter['[Ы'] = '[Î';
            corespondingLetter['(Ы'] = '(Î';
            corespondingLetter[')Ы'] = ')Î';
            corespondingLetter['|Ы'] = '|Î';
            corespondingLetter['/Ы'] = '/Î';
            corespondingLetter['>Ы'] = '>Î';
            corespondingLetter[';Ы'] = ';Î';
            corespondingLetter['-Ы'] = '-Î';
            corespondingLetter['_Ы'] = '_Î';
            corespondingLetter['=Ы'] = '=Î';
            corespondingLetter['+Ы'] = '+Î';
            corespondingLetter['"Ы'] = '"Î';
            corespondingLetter['}Ы'] = 'Î';
            corespondingLetter['{Ы'] = 'Î';
            corespondingLetter['#Ы'] = '#Î';
            corespondingLetter['&Ы'] = '&Î';
            corespondingLetter['*Ы'] = '*Î';


            corespondingLetter['Ь'] = 'I';
            corespondingLetter['ь'] = 'i';
            corespondingLetter['Ъ'] = 'I';
            corespondingLetter['ъ'] = 'i';

            corespondingLetter['Э'] = 'Ă';
            corespondingLetter['э'] = 'ă';
            corespondingLetter['Ю'] = 'Iu';
            corespondingLetter['ю'] = 'iu';

            corespondingLetter['Я'] = 'Ea';
            corespondingLetter['я'] = 'ea';

            corespondingLetter['АЯ'] = 'AIA';
            corespondingLetter['аЯ'] = 'aia';
            corespondingLetter['ЯЯ'] = 'IAIA';
            corespondingLetter['яЯ'] = 'iaia';
            corespondingLetter['ЮЯ'] = 'IUIA';
            corespondingLetter['юЯ'] = 'iuia';
            corespondingLetter['ИЯ'] = 'IA';
            corespondingLetter['иЯ'] = 'ia';
            corespondingLetter['ЙЯ'] = 'IA';
            corespondingLetter['йЯ'] = 'ia';
            corespondingLetter['ОЯ'] = 'OIA';
            corespondingLetter['оЯ'] = 'oia';
            corespondingLetter['УЯ'] = 'UIA';
            corespondingLetter['уЯ'] = 'uia';

            corespondingLetter['ЫЯ'] = 'ÂIA';
            corespondingLetter['ыЯ'] = 'âia';

            corespondingLetter['ЬЯ'] = 'IA';
            corespondingLetter['ьЯ'] = 'ia';
            corespondingLetter['ЭЯ'] = 'ĂIA';
            corespondingLetter['эЯ'] = 'ăia';


            corespondingLetter['Ая'] = 'Aia';
            corespondingLetter['ая'] = 'aia';
            corespondingLetter['Яя'] = 'Iaia';
            corespondingLetter['яя'] = 'iaia';
            corespondingLetter['Юя'] = 'Iuia';
            corespondingLetter['юя'] = 'iuia';
            corespondingLetter['Ия'] = 'Ia';
            corespondingLetter['ия'] = 'ia';
            corespondingLetter['Йя'] = 'Ia';
            corespondingLetter['йя'] = 'ia';
            corespondingLetter['Оя'] = 'Oia';
            corespondingLetter['оя'] = 'oia';
            corespondingLetter['Уя'] = 'Uia';
            corespondingLetter['уя'] = 'uia';

            corespondingLetter['Ья'] = 'Ia';
            corespondingLetter['ья'] = 'ia';
            corespondingLetter['Эя'] = 'Ăia';
            corespondingLetter['эя'] = 'ăia';

            corespondingLetter['Ыя'] = 'Âia';
            corespondingLetter['ыя'] = 'âia';

            return corespondingLetter;
        }

        function createGreekLettersDictionaryAndRomanianCorespondent() {
            var corespondingLetter = [];
            corespondingLetter['α'] = 'a';
            corespondingLetter['αι'] = 'e';
            corespondingLetter['αΙ'] = 'e';
            corespondingLetter['ΑΙ'] = 'E';
            corespondingLetter['Αι'] = 'E';

            corespondingLetter['αυγ'] = 'avg';
            corespondingLetter['αυδ'] = 'avdh';
            corespondingLetter['αυλ'] = 'avl';
            corespondingLetter['αυμ'] = 'avm';
            corespondingLetter['αυν'] = 'avn';
            corespondingLetter['αυρ'] = 'avr';

            corespondingLetter['Αυγ'] = 'Avg';
            corespondingLetter['Αυδ'] = 'Avdh';
            corespondingLetter['Αυλ'] = 'Avl';
            corespondingLetter['Αυμ'] = 'Avm';
            corespondingLetter['Αυν'] = 'Avn';
            corespondingLetter['Αυρ'] = 'Avr';

            corespondingLetter['ΑΥΓ'] = 'AVG';
            corespondingLetter['ΑΥΔ'] = 'AVDH';
            corespondingLetter['ΑΥΛ'] = 'AVL';
            corespondingLetter['ΑΥΜ'] = 'AVM';
            corespondingLetter['ΑΥΝ'] = 'AVN';
            corespondingLetter['ΑΥΡ'] = 'AVR';

            corespondingLetter['αυκ'] = 'afc';
            corespondingLetter['αυπ'] = 'afp';
            corespondingLetter['αυτ'] = 'aft';
            corespondingLetter['αυχ'] = 'afh';
            corespondingLetter['αυθ'] = 'afth';
            corespondingLetter['αυς'] = 'afs';
            corespondingLetter['αυζ'] = 'afz';

            corespondingLetter['Αυκ'] = 'Afc';
            corespondingLetter['Αυπ'] = 'Afp';
            corespondingLetter['Αυτ'] = 'Aft';
            corespondingLetter['Αυχ'] = 'Afh';
            corespondingLetter['Αυθ'] = 'Afth';
            corespondingLetter['Αυς'] = 'Afs';
            corespondingLetter['Αυζ'] = 'Afz';

            corespondingLetter['ΑΥΚ'] = 'AFC';
            corespondingLetter['ΑΥΠ'] = 'AFP';
            corespondingLetter['ΑΥΤ'] = 'AFF';
            corespondingLetter['ΑΥΧ'] = 'AFH';
            corespondingLetter['ΑΥΘ'] = 'AFTH';
            corespondingLetter['ΑΥΣ'] = 'AFS';
            corespondingLetter['ΑΥΖ'] = 'AFZ';

            corespondingLetter['αυ'] = 'af';
            corespondingLetter['αΥ'] = 'af';
            corespondingLetter['Αυ'] = 'Af';
            corespondingLetter['ΑΥ'] = 'AF';

            corespondingLetter['κ'] = 'c';
            corespondingLetter['και'] = 'che';
            corespondingLetter['κΑι'] = 'che';
            corespondingLetter['κΑΙ'] = 'che';
            corespondingLetter['Και'] = 'Che';
            corespondingLetter['ΚΑι'] = 'Che';
            corespondingLetter['ΚΑΙ'] = 'CHE';

            corespondingLetter['κοι'] = 'chi';
            corespondingLetter['κΟι'] = 'chi';
            corespondingLetter['κοΙ'] = 'chi';
            corespondingLetter['Κοι'] = 'Chi';
            corespondingLetter['ΚΟΙ'] = 'CHI';

            corespondingLetter['Δ'] = 'Dh';
            corespondingLetter['δ'] = 'dh';
            corespondingLetter['ε'] = 'e';
            corespondingLetter['ει'] = 'i';
            corespondingLetter['εΙ'] = 'i';
            corespondingLetter['ΕΙ'] = 'I';
            corespondingLetter['Ει'] = 'I';

            corespondingLetter['ευκ'] = 'efc';
            corespondingLetter['ευπ'] = 'efp';
            corespondingLetter['ευτ'] = 'eft';
            corespondingLetter['ευχ'] = 'efh';
            corespondingLetter['ευφ'] = 'ef';
            corespondingLetter['ευθ'] = 'efth';
            corespondingLetter['ευς'] = 'efs';
            corespondingLetter['ευξ'] = 'efcs';
            corespondingLetter['ευψ'] = 'efps';

            corespondingLetter['Ευκ'] = 'Efc';
            corespondingLetter['Ευπ'] = 'Efp';
            corespondingLetter['Ευτ'] = 'Eft';
            corespondingLetter['Ευχ'] = 'Efh';
            corespondingLetter['Ευφ'] = 'Ef';
            corespondingLetter['Ευθ'] = 'Efth';
            corespondingLetter['Ευς'] = 'Efs';
            corespondingLetter['Ευξ'] = 'Efcs';
            corespondingLetter['Ευψ'] = 'Efps';

            corespondingLetter['ΕΥΚ'] = 'EFC';
            corespondingLetter['ΕΥΠ'] = 'EFP';
            corespondingLetter['ΕΥΤ'] = 'EFT';
            corespondingLetter['ΕΥΧ'] = 'EFH';
            corespondingLetter['ΕΥΦ'] = 'EF';
            corespondingLetter['ΕΥΘ'] = 'EFTH';
            corespondingLetter['ΕΥΣ'] = 'EFS';
            corespondingLetter['ΕΥΞ'] = 'EFCS';
            corespondingLetter['ΕΥΨ'] = 'EFPS';

            corespondingLetter['ευβ'] = 'ev';
            corespondingLetter['ευγ'] = 'evg';
            corespondingLetter['ευδ'] = 'evd';
            corespondingLetter['ευζ'] = 'evz';
            corespondingLetter['ευλ'] = 'evl';
            corespondingLetter['ευμ'] = 'evm';
            corespondingLetter['ευν'] = 'evn';
            corespondingLetter['ευρ'] = 'evr';

            corespondingLetter['Ευβ'] = 'Ev';
            corespondingLetter['Ευγ'] = 'Evg';
            corespondingLetter['Ευδ'] = 'Evd';
            corespondingLetter['Ευζ'] = 'Evz';
            corespondingLetter['Ευλ'] = 'Evl';
            corespondingLetter['Ευμ'] = 'Evm';
            corespondingLetter['Ευν'] = 'Evn';
            corespondingLetter['Ευρ'] = 'Evr';

            corespondingLetter['ΕΥΒ'] = 'EVV';
            corespondingLetter['ΕΥΓ'] = 'EVG';
            corespondingLetter['ΕΥΔ'] = 'EVD';
            corespondingLetter['ΕΥΖ'] = 'EVZ';
            corespondingLetter['ΕΥΛ'] = 'EVL';
            corespondingLetter['ΕΥΜ'] = 'EVM';
            corespondingLetter['ΕΥΝ'] = 'EVN';
            corespondingLetter['ΕΥΡ'] = 'EVR';

            corespondingLetter['ευ'] = 'ef';
            corespondingLetter['εΥ'] = 'ef';
            corespondingLetter['Ευ'] = 'Ef';
            corespondingLetter['ΕΥ'] = 'EF';

            corespondingLetter['φ'] = 'f';
            corespondingLetter['γ'] = 'gh';
            corespondingLetter[' γγ'] = ' g';
            corespondingLetter['\nγγ'] = '\ng';
            corespondingLetter['.γγ'] = '.g';
            corespondingLetter[',γγ'] = ',g';
            corespondingLetter[';γγ'] = '?g';
            corespondingLetter['΄γγ'] = ';g';
            corespondingLetter[')γγ'] = ')g';
            corespondingLetter[']γγ'] = ']g';
            corespondingLetter['}γγ'] = '}g';
            corespondingLetter['!γγ'] = '!g';
            corespondingLetter['γγ'] = 'ng';

            corespondingLetter[' γΓ'] = ' g';
            corespondingLetter['\nγΓ'] = '\ng';
            corespondingLetter['.γΓ'] = '.g';
            corespondingLetter[',γΓ'] = ',g';
            corespondingLetter[';γΓ'] = '?g';
            corespondingLetter['΄γΓ'] = ';g';
            corespondingLetter[')γΓ'] = ')g';
            corespondingLetter[']γΓ'] = ']g';
            corespondingLetter['}γΓ'] = '}g';
            corespondingLetter['!γΓ'] = '!g';
            corespondingLetter['γΓ'] = 'ng';

            corespondingLetter[' γκ'] = ' g';
            corespondingLetter['\nγκ'] = '\ng';
            corespondingLetter['.γκ'] = '.g';
            corespondingLetter[',γκ'] = ',g';
            corespondingLetter[';γκ'] = '?g';
            corespondingLetter['΄γκ'] = ';g';
            corespondingLetter[')γκ'] = ')g';
            corespondingLetter[']γκ'] = ']g';
            corespondingLetter['}γκ'] = '}g';
            corespondingLetter['!γκ'] = '!g';
            corespondingLetter['γκ'] = 'ng';

            corespondingLetter[' γΚ'] = ' g';
            corespondingLetter['\nγΚ'] = '\ng';
            corespondingLetter['.γΚ'] = '.g';
            corespondingLetter[',γΚ'] = ',g';
            corespondingLetter[';γΚ'] = '?g';
            corespondingLetter['΄γΚ'] = ';g';
            corespondingLetter[')γΚ'] = ')g';
            corespondingLetter[']γΚ'] = ']g';
            corespondingLetter['}γΚ'] = '}g';
            corespondingLetter['!γΚ'] = '!g';
            corespondingLetter['γΚ'] = 'ng';

            corespondingLetter[' Γγ'] = ' G';
            corespondingLetter['\nΓγ'] = '\nG';
            corespondingLetter['.Γγ'] = '.G';
            corespondingLetter[',Γγ'] = ',G';
            corespondingLetter[';Γγ'] = '?G';
            corespondingLetter['΄Γγ'] = ';G';
            corespondingLetter[')Γγ'] = ')G';
            corespondingLetter[']Γγ'] = ']G';
            corespondingLetter['}Γγ'] = '}G';
            corespondingLetter['!Γγ'] = '!G';
            corespondingLetter['Γγ'] = 'Ng';

            corespondingLetter[' ΓΓ'] = ' G';
            corespondingLetter['\nΓΓ'] = '\nG';
            corespondingLetter['.ΓΓ'] = '.G';
            corespondingLetter[',ΓΓ'] = ',G';
            corespondingLetter[';ΓΓ'] = '?G';
            corespondingLetter['΄ΓΓ'] = ';G';
            corespondingLetter[')ΓΓ'] = ')G';
            corespondingLetter[']ΓΓ'] = ']G';
            corespondingLetter['}ΓΓ'] = '}G';
            corespondingLetter['!ΓΓ'] = '!G';
            corespondingLetter['ΓΓ'] = 'NG';

            corespondingLetter[' Γκ'] = ' G';
            corespondingLetter['\nΓκ'] = '\nG';
            corespondingLetter['.Γκ'] = '.G';
            corespondingLetter[',Γκ'] = ',G';
            corespondingLetter[';Γκ'] = '?G';
            corespondingLetter['΄Γκ'] = ';G';
            corespondingLetter[')Γκ'] = ')G';
            corespondingLetter[']Γκ'] = ']G';
            corespondingLetter['}Γκ'] = '}G';
            corespondingLetter['!Γκ'] = '!G';
            corespondingLetter['Γκ'] = 'Ng';

            corespondingLetter[' ΓΚ'] = ' G';
            corespondingLetter['\nΓΚ'] = '\nG';
            corespondingLetter['.ΓΚ'] = '.G';
            corespondingLetter[',ΓΚ'] = ',G';
            corespondingLetter[';ΓΚ'] = '?G';
            corespondingLetter['΄ΓΚ'] = ';G';
            corespondingLetter[')ΓΚ'] = ')G';
            corespondingLetter[']ΓΚ'] = ']G';
            corespondingLetter['}ΓΚ'] = '}G';
            corespondingLetter['!ΓΚ'] = '!G';
            corespondingLetter['ΓΚ'] = 'NG';

            corespondingLetter['χ'] = 'h';
            corespondingLetter['ι'] = 'i';
            corespondingLetter['λ'] = 'l';
            corespondingLetter['μ'] = 'm';
            corespondingLetter[' μπ'] = ' b';
            corespondingLetter['\nμπ'] = '\nb';
            corespondingLetter['.μπ'] = '.b';
            corespondingLetter[',μπ'] = ',b';
            corespondingLetter[';μπ'] = '?b';
            corespondingLetter['΄μπ'] = ';b';
            corespondingLetter[')μπ'] = ')b';
            corespondingLetter[']μπ'] = ']b';
            corespondingLetter['}μπ'] = '}b';
            corespondingLetter['!μπ'] = '!b';
            corespondingLetter['μπ'] = 'mb';

            corespondingLetter[' μΠ'] = ' b';
            corespondingLetter['\nμΠ'] = '\nb';
            corespondingLetter['.μΠ'] = '.b';
            corespondingLetter[',μΠ'] = ',b';
            corespondingLetter[';μΠ'] = '?b';
            corespondingLetter['΄μΠ'] = ';b';
            corespondingLetter[')μΠ'] = ')b';
            corespondingLetter[']μΠ'] = ']b';
            corespondingLetter['}μΠ'] = '}b';
            corespondingLetter['!μΠ'] = '!b';
            corespondingLetter['μΠ'] = 'mb';

            corespondingLetter[' Μπ'] = ' B';
            corespondingLetter['\nΜπ'] = '\nB';
            corespondingLetter['.Μπ'] = '.B';
            corespondingLetter[',Μπ'] = ',B';
            corespondingLetter[';Μπ'] = '?B';
            corespondingLetter['΄Μπ'] = ';B';
            corespondingLetter[')Μπ'] = ')B';
            corespondingLetter[']Μπ'] = ']B';
            corespondingLetter['}Μπ'] = '}B';
            corespondingLetter['!Μπ'] = '!B';
            corespondingLetter['Μπ'] = 'Mb';

            corespondingLetter[' ΜΠ'] = ' B';
            corespondingLetter['\nΜΠ'] = '\nB';
            corespondingLetter['.ΜΠ'] = '.B';
            corespondingLetter[',ΜΠ'] = ',B';
            corespondingLetter[';ΜΠ'] = '?B';
            corespondingLetter['΄ΜΠ'] = ';B';
            corespondingLetter[')ΜΠ'] = ')B';
            corespondingLetter[']ΜΠ'] = ']B';
            corespondingLetter['}ΜΠ'] = '}B';
            corespondingLetter['!ΜΠ'] = '!B';
            corespondingLetter['ΜΠ'] = 'MB';

            corespondingLetter['ν'] = 'n';
            corespondingLetter[' ντ'] = ' d';
            corespondingLetter['\nντ'] = '\nd';
            corespondingLetter['.ντ'] = '.d';
            corespondingLetter[',ντ'] = ',d';
            corespondingLetter[';ντ'] = '?d';
            corespondingLetter['΄ντ'] = ';d';
            corespondingLetter[')ντ'] = ')d';
            corespondingLetter[']ντ'] = ']d';
            corespondingLetter['}ντ'] = '}d';
            corespondingLetter['!ντ'] = '!d';
            corespondingLetter['ντ'] = 'nd';

            corespondingLetter[' νΤ'] = ' d';
            corespondingLetter['\nνΤ'] = '\nd';
            corespondingLetter['.νΤ'] = '.d';
            corespondingLetter[',νΤ'] = ',d';
            corespondingLetter[';νΤ'] = '?d';
            corespondingLetter['΄νΤ'] = ';d';
            corespondingLetter[')νΤ'] = ')d';
            corespondingLetter[']νΤ'] = ']d';
            corespondingLetter['}νΤ'] = '}d';
            corespondingLetter['!νΤ'] = '!d';
            corespondingLetter['νΤ'] = 'nd';

            corespondingLetter[' Ντ'] = ' D';
            corespondingLetter['\nΝτ'] = '\nD';
            corespondingLetter['.Ντ'] = '.D';
            corespondingLetter[',Ντ'] = ',D';
            corespondingLetter[';Ντ'] = '?D';
            corespondingLetter['΄Ντ'] = ';D';
            corespondingLetter[')Ντ'] = ')D';
            corespondingLetter[']Ντ'] = ']D';
            corespondingLetter['!Ντ'] = '!D';
            corespondingLetter['Ντ'] = 'Nd';

            corespondingLetter[' ΝΤ'] = ' D';
            corespondingLetter['\nΝΤ'] = '\nD';
            corespondingLetter['.ΝΤ'] = '.D';
            corespondingLetter[',ΝΤ'] = ',D';
            corespondingLetter[';ΝΤ'] = '?D';
            corespondingLetter['΄ΝΤ'] = ';D';
            corespondingLetter[')ΝΤ'] = ')D';
            corespondingLetter[']ΝΤ'] = ']D';
            corespondingLetter['!ΝΤ'] = '!D';
            corespondingLetter['ΝΤ'] = 'ND';
            corespondingLetter['ο'] = 'o';
            corespondingLetter['οι'] = 'i';
            corespondingLetter['οΙ'] = 'i';
            corespondingLetter['Οι'] = 'I';
            corespondingLetter['ΟΙ'] = 'I';
            corespondingLetter['όι'] = 'oi';
            corespondingLetter['Όι'] = 'Oi';
            corespondingLetter['ΌΙ'] = 'OI';
            corespondingLetter['ου'] = 'u';
            corespondingLetter['ου'] = 'u';
            corespondingLetter['Ου'] = 'U';
            corespondingLetter['ΟΥ'] = 'U';
            corespondingLetter['όυ'] = 'ou';
            corespondingLetter['όυ'] = 'ou';
            corespondingLetter['Όυ'] = 'Ou';
            corespondingLetter['ΌΥ'] = 'OU';
            corespondingLetter['π'] = 'p';
            corespondingLetter['ρ'] = 'r';
            corespondingLetter['σ'] = 's';
            corespondingLetter['ς'] = 's';
            corespondingLetter['τ'] = 't';
            corespondingLetter['β'] = 'v';
            corespondingLetter['ξ'] = 'x';
            corespondingLetter['ζ'] = 'z';
            corespondingLetter['Α'] = 'A';
            corespondingLetter['Κ'] = 'C';
            corespondingLetter['Ε'] = 'E';
            corespondingLetter['Φ'] = 'F';
            corespondingLetter['Γ'] = 'Gh';
            corespondingLetter['Χ'] = 'H';
            corespondingLetter['Ι'] = 'I';
            corespondingLetter['Λ'] = 'L';
            corespondingLetter['Μ'] = 'M';
            corespondingLetter['Ν'] = 'N';
            corespondingLetter['Ο'] = 'O';
            corespondingLetter['Π'] = 'P';
            corespondingLetter['Ρ'] = 'R';
            corespondingLetter['Σ'] = 'S';
            corespondingLetter['σχ'] = 'ș';
            corespondingLetter['σΧ'] = 'ș';
            corespondingLetter['ςχ'] = 'ș';
            corespondingLetter['ςΧ'] = 'ș';
            corespondingLetter['ΣΧ'] = 'Ș';
            corespondingLetter['Σχ'] = 'Ș';
            corespondingLetter['Τ'] = 'T';
            corespondingLetter['τσ'] = 'ț';
            corespondingLetter['τς'] = 'ț';
            corespondingLetter['τΣ'] = 'ț';
            corespondingLetter['ΤΣ'] = 'Ț';
            corespondingLetter['Τσ'] = 'Ț';
            corespondingLetter['Τς'] = 'Ț';
            corespondingLetter['τζ'] = 'dz';
            corespondingLetter['τΖ'] = 'dz';
            corespondingLetter['Τζ'] = 'Dz';
            corespondingLetter['ΤΖ'] = 'DZ';
            corespondingLetter['Β'] = 'V';
            corespondingLetter['Ξ'] = 'X';
            corespondingLetter['Ζ'] = 'Z';
            corespondingLetter['Η'] = 'I';
            corespondingLetter['η'] = 'i';
            corespondingLetter['ηυ'] = 'if';
            corespondingLetter['ηΥ'] = 'if';
            corespondingLetter['Ηυ'] = 'If';
            corespondingLetter['ΗΥ'] = 'IF';
            corespondingLetter['Θ'] = 'Th';
            corespondingLetter['θ'] = 'th';
            corespondingLetter['Υ'] = 'I';
            corespondingLetter['υ'] = 'i';
            corespondingLetter['υι'] = 'i';
            corespondingLetter['υΙ'] = 'i';
            corespondingLetter['Υι'] = 'I';
            corespondingLetter['ΥΙ'] = 'I';
            corespondingLetter['Ψ'] = 'Ps';
            corespondingLetter['ψ'] = 'ps';
            corespondingLetter['Ω'] = 'O';
            corespondingLetter['ω'] = 'o';
            corespondingLetter[';'] = '?';
            corespondingLetter['΄'] = ';';
            return corespondingLetter;

        }

        function createGreekDiacriticsDictionary() {
            var diacritic = [];
            diacritic['ά'] = 'α';
            diacritic['ά'] = 'α';
            diacritic['ὰ'] = 'α';
            diacritic['ᾶ'] = 'α';
            diacritic['ἀ'] = 'α';
            diacritic['ἄ'] = 'α';
            diacritic['ἂ'] = 'α';
            diacritic['ἆ'] = 'α';
            diacritic['ἁ'] = 'α';
            diacritic['ἅ'] = 'α';
            diacritic['ἃ'] = 'α';
            diacritic['ἇ'] = 'α';
            diacritic['ᾱ'] = 'α';
            diacritic['ᾰ'] = 'α';
            diacritic['ᾳ'] = 'α';
            diacritic['ᾴ'] = 'α';
            diacritic['ᾲ'] = 'α';
            diacritic['ᾷ'] = 'α';
            diacritic['ᾀ'] = 'α';
            diacritic['ᾄ'] = 'α';
            diacritic['ᾂ'] = 'α';
            diacritic['ᾆ'] = 'α';
            diacritic['ᾁ'] = 'α';
            diacritic['ᾅ'] = 'α';
            diacritic['ᾃ'] = 'α';
            diacritic['ᾇ'] = 'α';
            diacritic['Ά'] = 'Α';
            diacritic['Ὰ'] = 'Α';
            diacritic['Ά'] = 'Α';
            diacritic['Ἀ'] = 'Α';
            diacritic['Ἄ'] = 'Α';
            diacritic['Ἂ'] = 'Α';
            diacritic['Ἆ'] = 'Α';
            diacritic['Ἁ'] = 'Α';
            diacritic['Ἅ'] = 'Α';
            diacritic['Ἃ'] = 'Α';
            diacritic['Ἇ'] = 'Α';
            diacritic['Ᾱ'] = 'Α';
            diacritic['Ᾰ'] = 'Α';
            diacritic['ᾼ'] = 'Α';
            diacritic['ᾈ'] = 'Α';
            diacritic['ᾌ'] = 'Α';
            diacritic['ᾊ'] = 'Α';
            diacritic['ᾎ'] = 'Α';
            diacritic['ᾉ'] = 'Α';
            diacritic['ᾍ'] = 'Α';
            diacritic['ᾋ'] = 'Α';
            diacritic['ᾏ'] = 'Α';
            diacritic['έ'] = 'ε';
            diacritic['έ'] = 'ε';
            diacritic['ὲ'] = 'ε';
            diacritic['ἐ'] = 'ε';
            diacritic['ἔ'] = 'ε';
            diacritic['ἒ'] = 'ε';
            diacritic['ἑ'] = 'ε';
            diacritic['ἕ'] = 'ε';
            diacritic['ἓ'] = 'ε';
            diacritic['Έ'] = 'Ε';
            diacritic['Έ'] = 'Ε';
            diacritic['Ὲ'] = 'Ε';
            diacritic['Ἐ'] = 'Ε';
            diacritic['Ἔ'] = 'Ε';
            diacritic['Ἒ'] = 'Ε';
            diacritic['Ἑ'] = 'Ε';
            diacritic['Ἕ'] = 'Ε';
            diacritic['Ἓ'] = 'Ε';
            diacritic['ή'] = 'η';
            diacritic['ὴ'] = 'η';
            diacritic['ῆ'] = 'η';
            diacritic['ἠ'] = 'η';
            diacritic['ἤ'] = 'η';
            diacritic['ἢ'] = 'η';
            diacritic['ἦ'] = 'η';
            diacritic['ἡ'] = 'η';
            diacritic['ἥ'] = 'η';
            diacritic['ἣ'] = 'η';
            diacritic['ἧ'] = 'η';
            diacritic['ῃ'] = 'η';
            diacritic['ῄ'] = 'η';
            diacritic['ῂ'] = 'η';
            diacritic['ῇ'] = 'η';
            diacritic['ᾐ'] = 'η';
            diacritic['ᾔ'] = 'η';
            diacritic['ᾒ'] = 'η';
            diacritic['ᾖ'] = 'η';
            diacritic['ᾑ'] = 'η';
            diacritic['ᾕ'] = 'η';
            diacritic['ᾓ'] = 'η';
            diacritic['ᾗ'] = 'η';
            diacritic['Ή'] = 'Η';
            diacritic['Ὴ'] = 'Η';
            diacritic['Ἠ'] = 'Η';
            diacritic['Ἤ'] = 'Η';
            diacritic['Ἢ'] = 'Η';
            diacritic['Ἦ'] = 'Η';
            diacritic['Ἡ'] = 'Η';
            diacritic['Ἥ'] = 'Η';
            diacritic['Ἣ'] = 'Η';
            diacritic['Ἧ'] = 'Η';
            diacritic['ῌ'] = 'Η';
            diacritic['ᾘ'] = 'Η';
            diacritic['ᾜ'] = 'Η';
            diacritic['ᾚ'] = 'Η';
            diacritic['ᾞ'] = 'Η';
            diacritic['ᾙ'] = 'Η';
            diacritic['ᾝ'] = 'Η';
            diacritic['ᾛ'] = 'Η';
            diacritic['ᾟ'] = 'Η';
            diacritic['ί'] = 'ι';
            diacritic['ὶ'] = 'ι';
            diacritic['ῖ'] = 'ι';
            diacritic['ἰ'] = 'ι';
            diacritic['ἴ'] = 'ι';
            diacritic['ἲ'] = 'ι';
            diacritic['ἶ'] = 'ι';
            diacritic['ἱ'] = 'ι';
            diacritic['ἵ'] = 'ι';
            diacritic['ἳ'] = 'ι';
            diacritic['ἷ'] = 'ι';
            diacritic['ϊ'] = 'ι';
            diacritic['ΐ'] = 'ι';
            diacritic['ῒ'] = 'ι';
            diacritic['ῗ'] = 'ι';
            diacritic['ῑ'] = 'ι';
            diacritic['ῐ'] = 'ι';
            diacritic['Ί'] = 'Ι';
            diacritic['Ὶ'] = 'Ι';
            diacritic['Ἰ'] = 'Ι';
            diacritic['Ἴ'] = 'Ι';
            diacritic['Ἲ'] = 'Ι';
            diacritic['Ἶ'] = 'Ι';
            diacritic['Ἱ'] = 'Ι';
            diacritic['Ἵ'] = 'Ι';
            diacritic['Ἳ'] = 'Ι';
            diacritic['Ἷ'] = 'Ι';
            diacritic['Ϊ'] = 'Ι';
            diacritic['Ῑ'] = 'Ι';
            diacritic['Ῐ'] = 'Ι';
            diacritic['ό'] = 'ο';
            diacritic['ὸ'] = 'ο';
            diacritic['ό'] = 'ο';
            diacritic['ὀ'] = 'ο';
            diacritic['ὄ'] = 'ο';
            diacritic['ὂ'] = 'ο';
            diacritic['ὁ'] = 'ο';
            diacritic['ὅ'] = 'ο';
            diacritic['ὃ'] = 'ο';
            diacritic['Ό'] = 'Ο';
            diacritic['Ὸ'] = 'Ο';
            diacritic['Ὀ'] = 'Ο';
            diacritic['Ὄ'] = 'Ο';
            diacritic['Ό'] = 'Ο';
            diacritic['Ὂ'] = 'Ο';
            diacritic['Ὁ'] = 'Ο';
            diacritic['Ὅ'] = 'Ο';
            diacritic['Ὃ'] = 'Ο';
            diacritic['ύ'] = 'υ';
            diacritic['ύ'] = 'υ';
            diacritic['ὺ'] = 'υ';
            diacritic['ῦ'] = 'υ';
            diacritic['ὐ'] = 'υ';
            diacritic['ὔ'] = 'υ';
            diacritic['ὒ'] = 'υ';
            diacritic['ὖ'] = 'υ';
            diacritic['ὑ'] = 'υ';
            diacritic['ὕ'] = 'υ';
            diacritic['ὓ'] = 'υ';
            diacritic['ὗ'] = 'υ';
            diacritic['ϋ'] = 'υ';
            diacritic['ΰ'] = 'υ';
            diacritic['ῢ'] = 'υ';
            diacritic['ῧ'] = 'υ';
            diacritic['ῡ'] = 'υ';
            diacritic['ῠ'] = 'υ';
            diacritic['Ύ'] = 'Υ';
            diacritic['Ὺ'] = 'Υ';
            diacritic['Ὑ'] = 'Υ';
            diacritic['Ὕ'] = 'Υ';
            diacritic['Ὓ'] = 'Υ';
            diacritic['Ύ'] = 'Υ';
            diacritic['Ὗ'] = 'Υ';
            diacritic['Ϋ'] = 'Υ';
            diacritic['Ῡ'] = 'Υ';
            diacritic['Ῠ'] = 'Υ';
            diacritic['ώ'] = 'ω';
            diacritic['ὼ'] = 'ω';
            diacritic['ῶ'] = 'ω';
            diacritic['ὠ'] = 'ω';
            diacritic['ὤ'] = 'ω';
            diacritic['ὢ'] = 'ω';
            diacritic['ὦ'] = 'ω';
            diacritic['ὡ'] = 'ω';
            diacritic['ὥ'] = 'ω';
            diacritic['ὣ'] = 'ω';
            diacritic['ὧ'] = 'ω';
            diacritic['ώ'] = 'ω';
            diacritic['ῳ'] = 'ω';
            diacritic['ῴ'] = 'ω';
            diacritic['ῲ'] = 'ω';
            diacritic['ῷ'] = 'ω';
            diacritic['ᾠ'] = 'ω';
            diacritic['ᾤ'] = 'ω';
            diacritic['ᾢ'] = 'ω';
            diacritic['ᾦ'] = 'ω';
            diacritic['ᾡ'] = 'ω';
            diacritic['ᾥ'] = 'ω';
            diacritic['ᾣ'] = 'ω';
            diacritic['ᾧ'] = 'ω';
            diacritic['Ώ'] = 'Ω';
            diacritic['Ὼ'] = 'Ω';
            diacritic['Ὠ'] = 'Ω';
            diacritic['Ώ'] = 'Ω';
            diacritic['Ὤ'] = 'Ω';
            diacritic['Ὢ'] = 'Ω';
            diacritic['Ὦ'] = 'Ω';
            diacritic['Ὡ'] = 'Ω';
            diacritic['Ὥ'] = 'Ω';
            diacritic['Ὣ'] = 'Ω';
            diacritic['Ὧ'] = 'Ω';
            diacritic['ῼ'] = 'Ω';
            diacritic['ᾨ'] = 'Ω';
            diacritic['ᾬ'] = 'Ω';
            diacritic['ᾪ'] = 'Ω';
            diacritic['ᾮ'] = 'Ω';
            diacritic['ᾩ'] = 'Ω';
            diacritic['ᾭ'] = 'Ω';
            diacritic['ᾫ'] = 'Ω';
            diacritic['ᾯ'] = 'Ω';
            diacritic['ῤ'] = 'ρ';
            diacritic['ῥ'] = 'ρ';
            diacritic['Ῥ'] = 'Ρ';
            return diacritic;
        }


        var romanianLettersAndGreekCorespondent = createRomanianLettersDictionaryAndGreekCorespondent();
        var romanianLettersAndChyrilicCorespondent = createRomanianLettersDictionaryAndChyrilicCorespondent();

        var chyrilicLettersAndRomanianCorespondent = createChyrilicLettersDictionaryAndRomanianCorespondent();
        var greekLettersAndRomanianCorespondent = createGreekLettersDictionaryAndRomanianCorespondent();

        var greekDiacritics = createGreekDiacriticsDictionary();

        var getTransliteratedText = function (text, diacritics, corespondenceMapping) {
            var transliteratedText = "";

            text = " " + text + " ";
            var canGetNextNLetters = function (currentPoz, n, array) {
                return array.length > currentPoz + n;
            };

            var getNextNLetters = function (currentPoz, n, array) {
                var lettersString = "";
                var lettersAray = [];
                for (var i = 0; i <= n; i++) {
                    var index = currentPoz + i;
                    lettersString += array[index];
                    lettersAray.push(array[index]);
                }
                return {
                    lettersAray: lettersAray,
                    lettersString: lettersString
                };
            };

            var getLettersWithDiacriticMappings = function (diacritics, array) {
                var lettersWithDiacriticMappings = '';
                for (var i = 0; i < array.length; i++) {
                    lettersWithDiacriticMappings += diacritics[array[i]] || array[i];
                }
                return lettersWithDiacriticMappings;
            };

            var lettersArray = text.split("");

            var i = 0;
            while (i < lettersArray.length) {
                var changedLetter = null;
                if (canGetNextNLetters(i, 2, lettersArray)) {
                    var triftong = getNextNLetters(i, 2, lettersArray);
                    changedLetter = corespondenceMapping[triftong.lettersString];
                    if (!changedLetter) {
                        var triftongWithDiacriticMappings = getLettersWithDiacriticMappings(diacritics, triftong.lettersAray);
                        changedLetter = corespondenceMapping[triftongWithDiacriticMappings];
                    }
                }

                if (changedLetter) {
                    transliteratedText += changedLetter;
                    i += 3;

                } else {
                    if (canGetNextNLetters(i, 1, lettersArray)) {
                        var diftong = getNextNLetters(i, 1, lettersArray);
                        changedLetter = corespondenceMapping[diftong.lettersString];
                        if (!changedLetter) {
                            var diftongWithDiacriticMappings = getLettersWithDiacriticMappings(diacritics, diftong.lettersAray);
                            changedLetter = corespondenceMapping[diftongWithDiacriticMappings];
                        }
                    }

                    if (changedLetter) {
                        transliteratedText += changedLetter;
                        i += 2;
                    } else {

                        var letter = getNextNLetters(i, 0, lettersArray);
                        changedLetter = corespondenceMapping[letter.lettersString];
                        if (!changedLetter) {
                            var letterWithDiacriticMappings = getLettersWithDiacriticMappings(diacritics, letter.lettersAray);
                            changedLetter = corespondenceMapping[letterWithDiacriticMappings];
                        }

                        if (changedLetter) {
                            transliteratedText += changedLetter;
                        } else {
                            transliteratedText += letter.lettersString;
                        }

                        i++;
                    }
                }
            }

            return transliteratedText.slice(1, transliteratedText.length - 1);
        };

        var writeWithGreekLettersFromRomanian = function (romanianLettersText) {
            return getTransliteratedText(romanianLettersText, [], romanianLettersAndGreekCorespondent);
        };
        var writeWithRomanianLettersFromGreek = function (greekLettersText) {
            return getTransliteratedText(greekLettersText, greekDiacritics, greekLettersAndRomanianCorespondent);
        };

        var writeWithChyrilicLettersFromRomanian = function (romanianLettersText) {
            return getTransliteratedText(romanianLettersText, [], romanianLettersAndChyrilicCorespondent);
        };
        var writeWithRomanianLettersFromChyrilic = function (chyrillicLettersText) {
            return getTransliteratedText(chyrillicLettersText, [], chyrilicLettersAndRomanianCorespondent);
        };

        return {
            writeWithGreekLettersFromRomanian: writeWithGreekLettersFromRomanian,
            writeWithRomanianLettersFromGreek: writeWithRomanianLettersFromGreek,
            writeWithChyrilicLettersFromRomanian: writeWithChyrilicLettersFromRomanian,
            writeWithRomanianLettersFromChyrilic: writeWithRomanianLettersFromChyrilic
        };

    }]);