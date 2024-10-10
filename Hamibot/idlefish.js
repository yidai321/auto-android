// 文档地址：https://docs.hamibot.com/ 
/* 闲鱼每日任务 */
auto.waitFor()

const EMPTY_FUNCTION = Function.prototype
const clickTaskBtn = (e) => {
    const DO_TASK_OFFSET = 7
    e.parent().child(e.indexInParent() + DO_TASK_OFFSET).click()
    // 判断是不是已经完成
}
const touchOperation = {
    returnOpt: () => swipe(0, 1700, 200, 1700, 300),
    scrollup15s: () => swipe(600, 2600, 600, 340, 15000),
    switchApp: () => swipe(470, 2687, 950, 2687, 400),
    openPack: () => click(240, 1340),
    openTasks: () => click(984,1348),
    shootDice: () => click(610, 1270),

}
const commonTaskHandler = (task, delayBefore = 5000, delayAfter = 2000, callback = EMPTY_FUNCTION) => {
    clickTaskBtn(task)
    sleep(delayBefore)
    callback()
    //   返回闲鱼
    touchOperation.switchApp()
    sleep(delayAfter)
    // 返回任务列表界面
    touchOperation.returnOpt()
    receiveReward(task)
}

const receiveReward = (task) => {
    clickTaskBtn(task)
}

className("android.view.View").text("领取酬金").findOnce().click()
touchOperation.openTasks()
className("android.view.View").text("签到").findOne().click()
className("android.view.View").text("领取奖励").find().click()

const taskList = []

/* 去芭芭农场领水果 */
const completeTask1 = () => {
    toastLog("去芭芭农场领水果")
    let task = className("android.view.View").text("去芭芭农场领水果").findOne()
    commonTaskHandler(task)
}
taskList.push(completeTask1)


/* 薅羊毛赚话费 */
const completeTask2 = () => {
    toastLog("薅羊毛赚话费")
    let task = className("android.view.View").text("薅羊毛赚话费").findOne()
    commonTaskHandler(task)
}


/* 去中国移动签到领话费 */
const completeTask3 = () => {
    let task = className("android.view.View").text("去中国移动签到领话费").findOne()
    // commonTaskHandler(task)
    commonTaskHandler(task, 10000)
}

/* 去淘宝签到领红包 */
const completeTask4 = () => {
    let task = className("android.view.View").text("去淘宝签到领红包").findOne()
    commonTaskHandler(task, 10000)
}

/* 看15s视频得奖励 */
const completeTask5 = () => {
    let task = className("android.view.View").text("看15s视频得奖励").findOne()
    clickTaskBtn(task)
    sleep(18000)
    className("android.widget.TextView").text("| 跳过").findOne().click()
    className("android.widget.LinearLayout").depth(11).findOne().click()
}

/* 搜一搜推荐商品 */
const completeTask6 = () => {
    let task = className("android.view.View").text("搜一搜推荐商品").findOne()
    clickTaskBtn(task)
    sleep(600)
    className("android.widget.EditText").findOne().setText("水")
    className("android.widget.Button").findOne().click()
    sleep(600)
    touchOperation.scrollup15s()
    touchOperation.returnOpt()
    touchOperation.returnOpt()
    clickTaskBtn(task)
}

/* 去浏览全新好物 */
const completeTask7 = () => {
    let task = className("android.view.View").text("去浏览全新好物").findOne()
    clickTaskBtn(task)
    sleep(5000)
    swipe(600, 2600, 600, 340, 16000)
    swipe(0, 1700, 200, 1700, 300)
    sleep(1000)
    clickTaskBtn(task)
}
/* 浏览指定频道好物 */
const completeTask8 = () => {
    let task = className("android.view.View").text("浏览指定频道好物").findOne()
    clickTaskBtn(task)
    swipe(600, 2600, 600, 800, 16000)
    click(790, 175)
}
/* 去蚂蚁庄园逛一逛 */
const completeTask9 = () => {
    let task = className("android.view.View").text("去蚂蚁庄园逛一逛").findOne()
    commonTaskHandler(task)

}
/* 去支付宝农场领水果 */
const completeTask10 = () => {
    let task = className("android.view.View").text("去支付宝农场领水果").findOne()
    commonTaskHandler(task)
}

/* 去蚂蚁森林逛一逛 */
const completeTask11 = () => {
    let task = className("android.view.View").text("去蚂蚁森林逛一逛").findOne()
    commonTaskHandler(task)
}

/* 去快手极速版领红包 */
const completeTask12 = () => {
    let task = className("android.view.View").text("去快手极速版领红包").findOne()
    commonTaskHandler(task)
}

/* 去饿了么果园领水果 */
const completeTask20 = () => {
    let task = className("android.view.View").text("去饿了么果园领水果").findOne()
    commonTaskHandler(task, 10000)
}

/* 去天猫拿红包 */
const completeTask21 = () => {
    let task = className("android.view.View").text("去天猫拿红包").findOne()
    commonTaskHandler(task, 13000)
}
completeTask6() // 搜一搜推荐商品
completeTask8() // 浏览指定频道好物
completeTask7() // 去浏览全新好物
completeTask9() // 去蚂蚁庄园逛一逛
completeTask10() //去支付宝农场领水果
completeTask11() //去蚂蚁森林逛一逛
completeTask12() // 去快手极速版领红包
completeTask1() // 去芭芭农场领水果
completeTask3() //去中国移动签到领话费
completeTask4() //去淘宝签到领红包
completeTask5() // 看15s视频得奖励
completeTask2() // 薅羊毛赚话费
completeTask20() //去饿了么果园领水果
completeTask21() //去天猫拿红包

// 去逛一逛淘金币
/* 所有任务都完成之后的操作 */
while (!className("android.view.View").text("赚").exists()) {
    touchOperation.shootDice()
    sleep(7000)
}


/* 使用道具 */
while (true) {
    // 打开背包
    touchOperation.openPack()
    /* 该函数本来应该命名为untilFindOne()，但由于历史遗留原因已经无法修改。
    如果想要只在屏幕上搜索一次而不是一直搜索，请使用findOnce()。 */
    // sleep(500)
    if (className("android.view.View").text("使用").exists()) {
        className("android.view.View").text("使用").findOne().click()
        sleep(6000)
        if (className("android.view.View").text("扔骰子").exists()) {
        }
    } else {
        break
    }
}



