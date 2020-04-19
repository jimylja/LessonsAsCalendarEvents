import {Sheet} from '../../../models/sheet';
export const dummySheetData: Sheet[] = [
  {
    title: '5-В',
    colorId: 3,
    attendeesEmail: 'class8b@mail.com',
    lessons: [
      {
        number: 8,
        date: new Date(Date.UTC(2020, 3, 19, 0)),
        order: 3,
        location: '211',
        topic: 'Алгоритми з повторенням. Базова алгоритмічна структура повторення',
        hwTheory: '#3.1',
        hwPractice: '№6 (ст. 58) (зошит)'
      },
      {
        number: 9,
        date: new Date(Date.UTC(2020, 3, 18, 0)),
        order: 4,
        location: '211',
        topic: 'П.Р. 3. Складання та виконання алгоритмів з повторенням у середовищі Scratch',
        hwTheory: '#3.1',
        hwPractice: '№9 (ст. 58)',
      }
    ]
  },
  {
    title: '7-А',
    colorId: 0,
    attendeesEmail: 'class7a@mail.com',
    lessons: [
      {
        number: 9,
        date: new Date(Date.UTC(2020, 3, 17, 0)),
        order: 1,
        location: '211',
        topic: 'Завантаження даних з Інтернету. П.Р.2.',
        hwTheory: 'Урок №9',
        hwPractice: undefined,
      },
      {
        number: 10,
        date: new Date(Date.UTC(2020, 3, 18, 0)),
        order: 2,
        location: '211',
        topic: 'Безпечне користування Інтернетом. Контроль знань',
        hwTheory: 'Урок №10',
        hwPractice: undefined,
      }
    ]
  }
];

export const dummyGridResponse = {
  spreadsheetId: '1nwCS1MSx_oDNcUsAiYi4DM5ib_SHe-isUd655MHYX_g',
  properties: {
    title: 'SheduleTest',
    locale: 'uk_UA',
    autoRecalc: 'ON_CHANGE',
    timeZone: 'Europe/Kiev',
  },
  sheets: [
  {
    properties: {
      sheetId: 0,
      title: '5-В',
      index: 0,
      sheetType: 'GRID',
      gridProperties: {
        rowCount: 1002,
        columnCount: 26
      },
      tabColor: {
        red: 1
      },
      tabColorStyle: {
        rgbColor: {
          red: 1
        }
      }
    },
    data: [
      {
        rowData: [
          {
            values: [
              {
                userEnteredValue: {
                  stringValue: 'Календар класу'
                },
                effectiveValue: {
                  stringValue: 'Календар класу'
                },
                formattedValue: 'Календар класу',
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {},
              {
                userEnteredValue: {
                  stringValue: 'class8b@mail.com'
                },
                effectiveValue: {
                  stringValue: 'class8b@mail.com'
                },
                formattedValue: 'class8b@mail.com',
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredValue: {
                  stringValue: '№'
                },
                effectiveValue: {
                  stringValue: '№'
                },
                formattedValue: '№',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Дата'
                },
                effectiveValue: {
                  stringValue: 'Дата'
                },
                formattedValue: 'Дата',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Урок'
                },
                effectiveValue: {
                  stringValue: 'Урок'
                },
                formattedValue: 'Урок',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Кабінет'
                },
                effectiveValue: {
                  stringValue: 'Кабінет'
                },
                formattedValue: 'Кабінет',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Тема'
                },
                effectiveValue: {
                  stringValue: 'Тема'
                },
                formattedValue: 'Тема',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Д/з Теорія'
                },
                effectiveValue: {
                  stringValue: 'Д/з Теорія'
                },
                formattedValue: 'Д/з Теорія',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Д/З Практика'
                },
                effectiveValue: {
                  stringValue: 'Д/З Практика'
                },
                formattedValue: 'Д/З Практика',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredValue: {
                  numberValue: 8
                },
                effectiveValue: {
                  numberValue: 8
                },
                formattedValue: '8',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 43940
                },
                effectiveValue: {
                  numberValue: 43940
                },
                formattedValue: '19.04.2020',
                userEnteredFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 3
                },
                effectiveValue: {
                  numberValue: 3
                },
                formattedValue: '3',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 211
                },
                effectiveValue: {
                  numberValue: 211
                },
                formattedValue: '211',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Алгоритми з повторенням. Базова алгоритмічна структура повторення'
                },
                effectiveValue: {
                  stringValue: 'Алгоритми з повторенням. Базова алгоритмічна структура повторення'
                },
                formattedValue: 'Алгоритми з повторенням. Базова алгоритмічна структура повторення',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: '#3.1'
                },
                effectiveValue: {
                  stringValue: '#3.1'
                },
                formattedValue: '#3.1',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: '№6 (ст. 58) (зошит)'
                },
                effectiveValue: {
                  stringValue: '№6 (ст. 58) (зошит)'
                },
                formattedValue: '№6 (ст. 58) (зошит)',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredValue: {
                  numberValue: 9
                },
                effectiveValue: {
                  numberValue: 9
                },
                formattedValue: '9',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 43939
                },
                effectiveValue: {
                  numberValue: 43939
                },
                formattedValue: '18.04.2020',
                userEnteredFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 4
                },
                effectiveValue: {
                  numberValue: 4
                },
                formattedValue: '4',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 211
                },
                effectiveValue: {
                  numberValue: 211
                },
                formattedValue: '211',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'П.Р. 3. Складання та виконання алгоритмів з повторенням у середовищі Scratch'
                },
                effectiveValue: {
                  stringValue: 'П.Р. 3. Складання та виконання алгоритмів з повторенням у середовищі Scratch'
                },
                formattedValue: 'П.Р. 3. Складання та виконання алгоритмів з повторенням у середовищі Scratch',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: '#3.1'
                },
                effectiveValue: {
                  stringValue: '#3.1'
                },
                formattedValue: '#3.1',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: '№9 (ст. 58)'
                },
                effectiveValue: {
                  stringValue: '№9 (ст. 58)'
                },
                formattedValue: '№9 (ст. 58)',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          }
        ],
      }
    ]
  },
  {
    properties: {
      sheetId: 1031540668,
      title: '7-А',
      index: 1,
      sheetType: 'GRID',
      gridProperties: {
        rowCount: 1002,
        columnCount: 26
      },
      tabColor: {
        blue: 1
      },
      tabColorStyle: {
        rgbColor: {
          blue: 1
        }
      }
    },
    data: [
      {
        rowData: [
          {
            values: [
              {
                userEnteredValue: {
                  stringValue: 'Календар класу'
                },
                effectiveValue: {
                  stringValue: 'Календар класу'
                },
                formattedValue: 'Календар класу',
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {},
              {
                userEnteredValue: {
                  stringValue: 'class7a@mail.com'
                },
                effectiveValue: {
                  stringValue: 'class7a@mail.com'
                },
                formattedValue: 'class7a@mail.com',
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredValue: {
                  stringValue: '№'
                },
                effectiveValue: {
                  stringValue: '№'
                },
                formattedValue: '№',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Дата'
                },
                effectiveValue: {
                  stringValue: 'Дата'
                },
                formattedValue: 'Дата',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Урок'
                },
                effectiveValue: {
                  stringValue: 'Урок'
                },
                formattedValue: 'Урок',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Кабінет'
                },
                effectiveValue: {
                  stringValue: 'Кабінет'
                },
                formattedValue: 'Кабінет',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Тема'
                },
                effectiveValue: {
                  stringValue: 'Тема'
                },
                formattedValue: 'Тема',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Д/з Теорія'
                },
                effectiveValue: {
                  stringValue: 'Д/з Теорія'
                },
                formattedValue: 'Д/з Теорія',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Д/З Практика'
                },
                effectiveValue: {
                  stringValue: 'Д/З Практика'
                },
                formattedValue: 'Д/З Практика',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredValue: {
                  numberValue: 9
                },
                effectiveValue: {
                  numberValue: 9
                },
                formattedValue: '9',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 43938
                },
                effectiveValue: {
                  numberValue: 43938
                },
                formattedValue: '17.04.2020',
                userEnteredFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 1
                },
                effectiveValue: {
                  numberValue: 1
                },
                formattedValue: '1',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 211
                },
                effectiveValue: {
                  numberValue: 211
                },
                formattedValue: '211',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Завантаження даних з Інтернету. П.Р.2.'
                },
                effectiveValue: {
                  stringValue: 'Завантаження даних з Інтернету. П.Р.2.'
                },
                formattedValue: 'Завантаження даних з Інтернету. П.Р.2.',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Урок №9'
                },
                effectiveValue: {
                  stringValue: 'Урок №9'
                },
                formattedValue: 'Урок №9',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          },
          {
            values: [
              {
                userEnteredValue: {
                  numberValue: 10
                },
                effectiveValue: {
                  numberValue: 10
                },
                formattedValue: '10',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 43939
                },
                effectiveValue: {
                  numberValue: 43939
                },
                formattedValue: '18.04.2020',
                userEnteredFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  numberFormat: {
                    type: 'DATE',
                    pattern: 'dd.MM.yyyy'
                  },
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 2
                },
                effectiveValue: {
                  numberValue: 2
                },
                formattedValue: '2',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  numberValue: 211
                },
                effectiveValue: {
                  numberValue: 211
                },
                formattedValue: '211',
                userEnteredFormat: {
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'RIGHT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Безпечне користування Інтернетом. Контроль знань'
                },
                effectiveValue: {
                  stringValue: 'Безпечне користування Інтернетом. Контроль знань'
                },
                formattedValue: 'Безпечне користування Інтернетом. Контроль знань',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredValue: {
                  stringValue: 'Урок №10'
                },
                effectiveValue: {
                  stringValue: 'Урок №10'
                },
                formattedValue: 'Урок №10',
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  textFormat: {
                    foregroundColor: {},
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  }
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  hyperlinkDisplayType: 'PLAIN_TEXT',
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              },
              {
                userEnteredFormat: {
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM'
                },
                effectiveFormat: {
                  backgroundColor: {
                    red: 1,
                    green: 1,
                    blue: 1
                  },
                  padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 3
                  },
                  horizontalAlignment: 'LEFT',
                  verticalAlignment: 'BOTTOM',
                  wrapStrategy: 'OVERFLOW_CELL',
                  textFormat: {
                    foregroundColor: {},
                    fontFamily: 'Arial',
                    fontSize: 10,
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    foregroundColorStyle: {
                      rgbColor: {}
                    }
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      red: 1,
                      green: 1,
                      blue: 1
                    }
                  }
                }
              }
            ]
          }
        ],
      }
    ]
  },
],
  spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/1nwCS1MSx_oDNcUsAiYi4DM5ib_SHe-isUd655MHYX_g/edit'
};

