// 文档地址：https://docs.hamibot.com/ 
/* 闲鱼每日任务 */
auto.waitFor()
toastLog("开始执行脚本")
const EMPTY_FUNCTION = function () { }
const clickTaskBtn = (e) => {
    const DO_TASK_OFFSET = 7
    e.parent().child(e.indexInParent() + DO_TASK_OFFSET).click()
    // 判断是不是已经完成
}

const touchOperation = {
    returnOpt: () => {
        toastLog("返回")
        swipe(0, 1700, 200, 1700, 300)
    },
    scrollup: (ms) => {
        toastLog(`上滑${ms}毫秒`)
        swipe(600, 2600, 600, 340, ms)
    },
    switchApp: () => swipe(470, 2687, 950, 2687, 400),
    openPack: () => {
        toastLog("打开背包")
        click(240, 1340)
    },
    openTasks: () => {
        toastLog("打开任务列表")
        click(984, 1348)
    },
    shootDice: () => {
        toastLog("扔骰子")
        click(610, 1270)
    },

}


const receiveReward = (task) => {
    clickTaskBtn(task)
}

// 
if (className("android.view.View").text("领取酬金").exists()) {
    className("android.view.View").text("领取酬金").findOne().click()
} else {
    toastLog("不需要领取酬金")
}

touchOperation.openTasks()

sleep(400)
// 
if (className("android.view.View").text("签到").exists()) {
    className("android.view.View").text("签到").findOne().click()
} else {
    toastLog("不需要签到")
}


let completed = 0
toastLog(`已完成${completed}`)



/* 去芭芭农场领水果 */
const completeTask1 = () => {
    toastLog("去芭芭农场领水果")
    if (!className("android.view.View").text("去芭芭农场领水果").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去芭芭农场领水果").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(5000)

    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}



/* 薅羊毛赚话费 */
const completeTask2 = () => {
    toastLog("薅羊毛赚话费")
    if (!className("android.view.View").text("薅羊毛赚话费").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("薅羊毛赚话费").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(5000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}


/* 去中国移动签到领话费 */
const completeTask3 = () => {
    toastLog("去中国移动签到领话费")
    if (!className("android.view.View").text("去中国移动签到领话费").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去中国移动签到领话费").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(15000)

    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 去淘宝签到领红包 */
const completeTask4 = () => {
    toastLog("去淘宝签到领红包")
    if (!className("android.view.View").text("去淘宝签到领红包").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去淘宝签到领红包").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(10000)

    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 看15s视频得奖励 */
const completeTask5 = () => {
    toastLog("看15s视频得奖励")
    if (!className("android.view.View").text("看15s视频得奖励").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("看15s视频得奖励").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(18000)
    className("android.widget.TextView").text("| 跳过").findOne().click()
    className("android.widget.LinearLayout").depth(11).findOne().click()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 搜一搜推荐商品 */
const completeTask6 = () => {
    toastLog("搜一搜推荐商品")
    if (!className("android.view.View").text("搜一搜推荐商品").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("搜一搜推荐商品").findOne()
    toastLog(task)
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(600)
    className("android.widget.EditText").findOne().setText("水")
    className("android.widget.Button").findOne().click()
    sleep(600)
    touchOperation.scrollup15s()
    touchOperation.returnOpt()
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 去浏览全新好物 */
const completeTask7 = () => {
    toastLog("去浏览全新好物")
    if (!className("android.view.View").text("去浏览全新好物").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去浏览全新好物").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(5000)
    swipe(600, 2600, 600, 340, 18000)
    swipe(0, 1700, 200, 1700, 300)
    sleep(1000)
    completed += 1
    toastLog(`已完成${completed}`)
}
/* 浏览指定频道好物 */
const completeTask8 = () => {
    toastLog("浏览指定频道好物")
    if (!className("android.view.View").text("浏览指定频道好物").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("浏览指定频道好物").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(1000)
    swipe(600, 2600, 600, 800, 16000)
    click(790, 175)
    completed += 1
    toastLog(`已完成${completed}`)
}
/* 去蚂蚁庄园逛一逛 */
const completeTask9 = () => {
    toastLog("去蚂蚁庄园逛一逛")
    if (!className("android.view.View").text("去蚂蚁庄园逛一逛").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去蚂蚁庄园逛一逛").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(5000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)

}
/* 去支付宝农场领水果 */
const completeTask10 = () => {
    toastLog("去支付宝农场领水果")
    if (!className("android.view.View").text("去支付宝农场领水果").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去支付宝农场领水果").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(5000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 去蚂蚁森林逛一逛 */
const completeTask11 = () => {
    toastLog("去蚂蚁森林逛一逛")
    if (!className("android.view.View").text("去蚂蚁森林逛一逛").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去蚂蚁森林逛一逛").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(5000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 去快手极速版领红包 */
const completeTask12 = () => {
    toastLog("去快手极速版领红包")
    if (!className("android.view.View").text("去快手极速版领红包").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去快手极速版领红包").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(5000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 去饿了么果园领水果 */
const completeTask20 = () => {
    toastLog("去饿了么果园领水果")
    if (!className("android.view.View").text("去饿了么果园领水果").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去饿了么果园领水果").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(10000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

/* 去天猫拿红包 */
const completeTask21 = () => {
    toastLog("去天猫拿红包")
    if (!className("android.view.View").text("去天猫拿红包").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去天猫拿红包").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(13000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()

    completed += 1
    toastLog(`已完成${completed}`)
}
// 搜一搜喜欢的商品
const completeTask22 = () => {
    toastLog("搜一搜喜欢的商品")
    if (!className("android.view.View").text("搜一搜喜欢的商品").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("搜一搜喜欢的商品").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(3000)
    swipe(600, 2600, 600, 340, 20000)
    swipe(0, 1700, 200, 1700, 300)
    completed += 1
    toastLog(`已完成${completed}`)
}
// 去支付宝领积分
const completeTask23 = () => {
    toastLog("去支付宝领积分")
    if (!className("android.view.View").text("去支付宝领积分").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去支付宝领积分").findOne()
    if (task == null) {
        return
    }
    clickTaskBtn(task)
    sleep(10000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}
// 去淘特领好礼
const completeTask24 = () => {
    toastLog("去淘特领好礼")
    if (!className("android.view.View").text("去淘特领好礼").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去淘特领好礼").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(9000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)

}
// 去菜鸟抽手机
const completeTask25 = () => {
    toastLog("去菜鸟抽手机")
    if (!className("android.view.View").text("去菜鸟抽手机").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去菜鸟抽手机").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(4000)
    toastLog("sdfsdfwefwefwef")
    click(600, 2200) // click有时没反应
    sleep(10000)
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}
// 去1688领0元好物
const completeTask26 = () =>  {
    toastLog("去1688领0元好物")
    if (!className("android.view.View").text("去1688领0元好物").exists()) {
        toastLog("此任务没出现")
        return 
    }
    let task = className("android.view.View").text("去1688领0元好物").findOne()
    if (task == null || task.parent().child(task.indexInParent() + 7).text() != "去完成") {
        toastLog("此任务已完成或没出现")
        return
    }
    clickTaskBtn(task)
    sleep(10000)
    toastLog("sdfsdfwefwefwef")
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(2000)
    // 返回任务列表界面
    touchOperation.returnOpt()
    completed += 1
    toastLog(`已完成${completed}`)
}

let time = 0
while (completed < 18 && time <= 3) {
    completeTask6() // 搜一搜推荐商品
    completeTask8() // 浏览指定频道好物，最后
    completeTask7() // 去浏览全新好物
    completeTask9() // 去蚂蚁庄园逛一逛
    completeTask10() //去支付宝农场领水果
    completeTask11() //去蚂蚁森林逛一逛
    completeTask12() // 去快手极速版领红包
    completeTask1() // 去芭芭农场领水果
    completeTask3() //去中国移动签到领话费
    completeTask4() //去淘宝签到领红包
    completeTask5() // 看15s视频得奖励，不对
    completeTask2() // 薅羊毛赚话费

    completeTask21() //去天猫拿红包
    completeTask22() //搜一搜喜欢的商品
    completeTask23() // 去支付宝领积分
    completeTask24() // 去淘特领好礼
    completeTask25() // 去菜鸟抽手机
    completeTask20() //去饿了么果园领水果 ,不一定友
    completeTask26() // 去1688领0元好物
    time += 1
    sleep(500)
    if (className("android.view.View").text("领取奖励").exists()) {
        className("android.view.View").text("领取奖励").find().click()
    } else {
        toastLog("没有可领取的奖励")
    }
}



// bounds(1086,891,1188,993).click() // 关闭任务列表


sleep(500)
toastLog("关闭任务列表")
click(1100, 930)
sleep(1000)
/* 所有任务都完成之后的操作 */
while (!className("android.view.View").text("赚").exists()) {
    touchOperation.shootDice()
    sleep(7000)
}

// 任务过程中，滑块验证(正常界面也会触发) 
// !!!
if (id("content").exists()) {
    swipe(240, 1670, 1000, 1670)
}



/* 使用道具 */
while (true) {
    // 打开背包
    touchOperation.openPack()
    /* 该函数本来应该命名为untilFindOne()，但由于历史遗留原因已经无法修改。
    如果想要只在屏幕上搜索一次而不是一直搜索，请使用findOnce()。 */
    sleep(1000)
    if (className("android.view.View").text("使用").exists()) {
        toastLog("存在")
        className("android.view.View").text("使用").findOne().click()
        sleep(8000)
        if (id("achivementBtn").exists()) {
            id("achivementBtn").findOne().click()
        }
        if (className("android.view.View").text("扔骰子").exists()) {
            className("android.view.View").text("扔骰子").findOne().click()
            sleep(300)
            className("android.view.View").text("扔骰子")
        }
    } else {
        toastLog("补存在")
        click(1100, 1000)
        break
    }
}


toastLog("执行结束")
