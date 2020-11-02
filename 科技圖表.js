const dataSource1 = {
    chart: {
        caption: "top10熱門討論產品",
        xaxisname: "產品",
        yaxisname: "討論數",
        numbersuffix: "次",
        theme: "gammel"
    },
    data: [
        {
            label: "iPhone 12",
            value: "924"
        },
        {
            label: "iPhone 12 pro",
            value: "838"
        },
        {
            label: "Galaxy s20",
            value: "683"
        },
        {
            label: "Asus ROG Phone3",
            value: "611"
        },
        {
            label: "airpods pro",
            value: "592"
        },
        {
            label: "Xperia",
            value: "496"
        },
        {
            label: "realme X50",
            value: "467"
        },
        {
            label: "藍芽耳機",
            value: "394"
        },
        {
            label: "小米手環5",
            value: "312"
        },
        {
            label: "nest audio",
            value: "296"
        }
    ]
};
const dataSource2 = {
    chart: {
        caption: "top10潛在趨勢產品",
        xaxisname: "產品",
        yaxisname: "成長度",
        numbersuffix: "%",
        theme: "gammel"
    },
    data: [
        {
            label: "骨傳導藍芽耳機",
            value: "209"
        },
        {
            label: "airpods pro",
            value: "176"
        },
        {
            label: "switch",
            value: "153"
        },
        {
            label: "nest audio",
            value: "152"
        },
        {
            label: "氣炸鍋",
            value: "132"
        },
        {
            label: "iPhone12 pro",
            value: "107"
        },
        {
            label: "iPhone12",
            value: "104"
        },
        {
            label: "acerpure",
            value: "93"
        },
        {
            label: "VR眼鏡",
            value: "92"
        },
        {
            label: "掃地機器人",
            value: "89"
        }
    ]
};
FusionCharts.ready(function () {
    var myChart1 = new FusionCharts({
        type: "column2d",
        renderAt: "熱門度",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: dataSource1
    }).render();
    var myChart2 = new FusionCharts({
        type: "column2d",
        renderAt: "趨勢度版型",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: dataSource2
    }).render();
});