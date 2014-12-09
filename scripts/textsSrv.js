var romanianChyrilicAndGreekModule = angular.module("romanianChyrilicAndGreek");
romanianChyrilicAndGreekModule.factory('textsSrv',
    [function () {

        var texts = {
            applicationName: "DM Transliterator",
            author: "- by Dan Misailescu",
            titleRomanianLetters: "Limba Română",
            titleChyrilicLetters: "Кириллица - Лимба Ромынэ",
            titleGreekLetters: "Ελληνικά - Λιμπα Ρομανα",
            placeHolderRomanianLetters: "Textul cu litere românești...",
            placeHolderGreekLetters: "Textul cu litere grecești (γρεκεσχτι)...",
            placeHolderChyrilicLetters: "Textul cu litere chirilice (кирилике)...",
            about: {
                romanian: {
                    title: "Română (Romanian) - Scrie limba română cu litere chirilice și grecești",
                    descriptionRo: "Deoarece suntem Români şi cei care scriem cu grafie latină, şi cei care scriem cu litere chirilice sau greceşti, am făcut acest program prin care să putem fi mai uniţi, noi toţi ce vorbim aceeaşi limbă. Să vă fie spre folos!",
                    descriptionCh: "Деоареке сунтем Ромыни ши кей каре скрйем ку графйе латинэ, ши кей каре скрйем ку литере кирилике сау грекешти, ам фэкут акест програм прин каре сэ путем фи май уници, ной тоци ке ворбим акеяши лимбэ. Сэ вэ фйе спре фолос!",
                    descriptionGr: "Ντεοαρεκε σουντεμ Ρομανι σχι κει καρε σκριεμ κου γραφιε λατινα, σχι κει καρε σκριεμ κου λιτερε κιριλικε σαου γρεκεσχτι, αμ φακουτ ακεστ προγραμ πριν καρε σα πουτεμ φι μαι ουνιτσι, νόι τοτσι κε βορμπιμ ακεεασχι λιμπα. Σα βα φιε σπρε φολος!"
                },
                english: {
                    title: "English - Write romanian language with cyrillic and greek letters",
                    description: "Because we are Romanians, both those who write using the latin alphabet and those who write using cyrillic or greek letters, I created this program to help all of us, who speak the same language, be more united. I hope this will be useful to you!"
                },
                russian: {
                    title: "Ру́сский (Russian) - Напиши на Румынском языке с кириллицей или греческим буквам",
                    description: "Потому что мы румыны, и тех кто пишет на латинице, и тех кто пишет на кириллице или греческом, я сделал эту программу, чтобы мы могли быть едины, все из нас, кто не говорит на одном языке. Пусть вам будет в пользу!"
                }
            }
        };

        return {
            texts: texts
        };

    }]);