
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
for (const holiday of holidays) {
       console.log(holiday); // 配列の各要素を出力
}

// while文の場合
while (holidays.length > 0) {
        const holiday = holidays.shift(); // 配列の先頭から要素を取り出し
        console.log(holiday); // 取り出した要素を出力
}