import { defineConfig, presetUno } from 'unocss';
import UnocssIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import presetWind, { Theme } from '@unocss/preset-wind';
import transformerCompileClass from '@unocss/transformer-compile-class';
import presetTheme from 'unocss-preset-theme';

export default defineConfig({
  rules: [],
  shortcuts: {
    'font-1': 'text-2xl font-bold',
  },
  theme: {
    colors: {
      'primary-6': 'rgb(var(--arcoblue-6))',
      red: {
        '50': '#FFECE8',
        '100': '#FDCDC5',
        '200': '#FBACA3',
        '300': '#F98981',
        '400': '#F76560',
        '500': '#F53F3F',
        '600': '#CB272D',
        '700': '#A1151E',
        '800': '#770813',
        '900': '#4D000A',
      },
      orangered: {
        '50': '#FFF3E8',
        '100': '#FDDDC3',
        '200': '#FCC59F',
        '300': '#FAAC7B',
        '400': '#F99057',
        '500': '#F77234',
        '600': '#CC5120',
        '700': '#A23511',
        '800': '#771F06',
        '900': '#4D0E00',
      },
      orange: {
        '50': '#FFF7E8',
        '100': '#FFE4BA',
        '200': '#FFCF8B',
        '300': '#FFB65D',
        '400': '#FF9A2E',
        '500': '#FF7D00',
        '600': '#D25F00',
        '700': '#A64500',
        '800': '#792E00',
        '900': '#4D1B00',
      },
      gold: {
        '50': '#FFFCE8',
        '100': '#FDF4BF',
        '200': '#FCE996',
        '300': '#FADC6D',
        '400': '#F9CC45',
        '500': '#F7BA1E',
        '600': '#CC9213',
        '700': '#A26D0A',
        '800': '#774B04',
        '900': '#4D2D00',
      },
      yellow: {
        '50': '#FEFFE8',
        '100': '#FEFEBE',
        '200': '#FDFA94',
        '300': '#FCF26B',
        '400': '#FBE842',
        '500': '#FADC19',
        '600': '#CFAF0F',
        '700': '#A38408',
        '800': '#785D03',
        '900': '#4D3800',
      },
      lime: {
        '50': '#FCFFE8',
        '100': '#EDF8BB',
        '200': '#DCF190',
        '300': '#C9E968',
        '400': '#B5E241',
        '500': '#9FDB1D',
        '600': '#7EB712',
        '700': '#5F940A',
        '800': '#437004',
        '900': '#2A4D00',
      },
      green: {
        '50': '#E8FFEA',
        '100': '#AFF0B5',
        '200': '#7BE188',
        '300': '#4CD263',
        '400': '#23C343',
        '500': '#00B42A',
        '600': '#009A29',
        '700': '#008026',
        '800': '#006622',
        '900': '#004D1C',
      },
      cyan: {
        '50': '#E8FFFB',
        '100': '#B7F4EC',
        '200': '#89E9E0',
        '300': '#5EDFD6',
        '400': '#37D4CF',
        '500': '#14C9C9',
        '600': '#0DA5AA',
        '700': '#07828B',
        '800': '#03616C',
        '900': '#00424D',
      },
      blue: {
        '50': '#E8F7FF',
        '100': '#C3E7FE',
        '200': '#9FD4FD',
        '300': '#7BC0FC',
        '400': '#57A9FB',
        '500': '#3491FA',
        '600': '#206CCF',
        '700': '#114BA3',
        '800': '#063078',
        '900': '#001A4D',
      },
      arcoblue: {
        '50': '#E8F3FF',
        '100': '#BEDAFF',
        '200': '#94BFFF',
        '300': '#6AA1FF',
        '400': '#4080FF',
        '500': '#165DFF',
        '600': '#0E42D2',
        '700': '#072CA6',
        '800': '#031A79',
        '900': '#000D4D',
      },
      purple: {
        '50': '#F5E8FF',
        '100': '#DDBEF6',
        '200': '#C396ED',
        '300': '#A871E3',
        '400': '#8D4EDA',
        '500': '#722ED1',
        '600': '#551DB0',
        '700': '#3C108F',
        '800': '#27066E',
        '900': '#16004D',
      },
      pinkpurple: {
        '50': '#FFE8FB',
        '100': '#F7BAEF',
        '200': '#F08EE6',
        '300': '#E865DF',
        '400': '#E13EDB',
        '500': '#D91AD9',
        '600': '#B010B6',
        '700': '#8A0993',
        '800': '#650370',
        '900': '#42004D',
      },
      magenta: {
        '50': '#FFE8F1',
        '100': '#FDC2DB',
        '200': '#FB9DC7',
        '300': '#F979B7',
        '400': '#F754A8',
        '500': '#F5319D',
        '600': '#CB1E83',
        '700': '#A11069',
        '800': '#77064F',
        '900': '#4D0034',
      },
      gray: {
        '50': '#f7f8fa',
        '100': '#f2f3f5',
        '200': '#e5e6eb',
        '300': '#c9cdd4',
        '400': '#a9aeb8',
        '500': '#86909c',
        '600': '#6b7785',
        '700': '#4e5969',
        '800': '#272e3b',
        '900': '#1d2129',
      },
    },
  },
  presets: [
    //@ts-ignore
    presetUno(),
    //@ts-ignore
    UnocssIcons({
      scale: 1,
      prefix: 'i-',
      extraProperties: {
        'vertical-align': 'middle',
        display: 'inline-block',
      },
    }),
    //@ts-ignore
    presetTheme<Theme>({
      theme: {
        // Configure dark themes
        dark: {
          colors: {
            red: {
              '50': '#4D000A',
              '100': '#770611',
              '200': '#A1161F',
              '300': '#CB2E34',
              '400': '#F54E4E',
              '500': '#F76965',
              '600': '#F98D86',
              '700': '#FBB0A7',
              '800': '#FDD1CA',
              '900': '#FFF0EC',
            },
            orangered: {
              '50': '#4D0E00',
              '100': '#771E05',
              '200': '#A23714',
              '300': '#CC5729',
              '400': '#F77E45',
              '500': '#F9925A',
              '600': '#FAAD7D',
              '700': '#FCC6A1',
              '800': '#FDDEC5',
              '900': '#FFF4EB',
            },
            orange: {
              '50': '#4D1B00',
              '100': '#793004',
              '200': '#A64B0A',
              '300': '#D26913',
              '400': '#FF8D1F',
              '500': '#FF9626',
              '600': '#FFB357',
              '700': '#FFCD87',
              '800': '#FFE3B8',
              '900': '#FFF7E8',
            },
            gold: {
              '50': '#4D2D00',
              '100': '#774B04',
              '200': '#A26F0F',
              '300': '#CC961F',
              '400': '#F7C034',
              '500': '#F9CC44',
              '600': '#FADC6C',
              '700': '#FCE995',
              '800': '#FDF4BE',
              '900': '#FFFCE8',
            },
            yellow: {
              '50': '#4D3800',
              '100': '#785E07',
              '200': '#A38614',
              '300': '#CFB325',
              '400': '#FAE13C',
              '500': '#FBE94B',
              '600': '#FCF374',
              '700': '#FDFA9D',
              '800': '#FEFEC6',
              '900': '#FEFFF0',
            },
            lime: {
              '50': '#2A4D00',
              '100': '#447006',
              '200': '#629412',
              '300': '#84B723',
              '400': '#A8DB39',
              '500': '#B8E24B',
              '600': '#CBE970',
              '700': '#DEF198',
              '800': '#EEF8C2',
              '900': '#FDFFEE',
            },
            green: {
              '50': '#004D1C',
              '100': '#046625',
              '200': '#0A802D',
              '300': '#129A37',
              '400': '#1DB440',
              '500': '#27C346',
              '600': '#50D266',
              '700': '#7EE18B',
              '800': '#B2F0B7',
              '900': '#EBFFEC',
            },
            cyan: {
              '50': '#00424D',
              '100': '#06616C',
              '200': '#11838B',
              '300': '#1FA6AA',
              '400': '#30C9C9',
              '500': '#3FD4CF',
              '600': '#66DFD7',
              '700': '#90E9E1',
              '800': '#BEF4ED',
              '900': '#F0FFFC',
            },
            blue: {
              '50': '#001A4D',
              '100': '#052F78',
              '200': '#134CA3',
              '300': '#2971CF',
              '400': '#469AFA',
              '500': '#5AAAFB',
              '600': '#7DC1FC',
              '700': '#A1D5FD',
              '800': '#C6E8FE',
              '900': '#EAF8FF',
            },
            arcoblue: {
              '50': '#000D4D',
              '100': '#041B79',
              '200': '#0E32A6',
              '300': '#1D4DD2',
              '400': '#306FFF',
              '500': '#3C7EFF',
              '600': '#689FFF',
              '700': '#93BEFF',
              '800': '#BEDAFF',
              '900': '#EAF4FF',
            },
            purple: {
              '50': '#16004D',
              '100': '#27066E',
              '200': '#3E138F',
              '300': '#5A25B0',
              '400': '#7B3DD1',
              '500': '#8E51DA',
              '600': '#A974E3',
              '700': '#C59AED',
              '800': '#DFC2F6',
              '900': '#F7EDFF',
            },
            pinkpurple: {
              '50': '#42004D',
              '100': '#650370',
              '200': '#8A0D93',
              '300': '#B01BB6',
              '400': '#D92ED9',
              '500': '#E13DDB',
              '600': '#E866DF',
              '700': '#F092E6',
              '800': '#F7C1F0',
              '900': '#FFF2FD',
            },
            magenta: {
              '50': '#4D0034',
              '100': '#770850',
              '200': '#A1176C',
              '300': '#CB2B88',
              '400': '#F545A6',
              '500': '#F756A9',
              '600': '#F97AB8',
              '700': '#FB9EC8',
              '800': '#FDC3DB',
              '900': '#FFE8F1',
            },
            gray: {
              '50': '#f7f8fa',
              '100': '#f2f3f5',
              '200': '#e5e6eb',
              '300': '#c9cdd4',
              '400': '#a9aeb8',
              '500': '#86909c',
              '600': '#6b7785',
              '700': '#4e5969',
              '800': '#272e3b',
              '900': '#1d2129',
            },
          },
        },
        // Configure compact themes
        compact: {},
      },
    }),
  ],
  transformers: [
    //@ts-ignore
    transformerCompileClass({
      trigger: 'kk',
    }),
  ],
});
