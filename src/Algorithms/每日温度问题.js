/**
 * 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
 * 如果之后都不会升高，请在该位置用 0 来代替。
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
// 入参是温度数组
const dailyTemperatures = function (T) {
    const len = T.length // 缓存数组的长度 
    const stack = [] // 初始化一个栈   
    const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
    for (let i = 0; i < len; i++) {
        // 若栈不为0，且存在打破递减趋势的温度值
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            // 将栈顶温度值对应的索引出栈
            const top = stack.pop()
            // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
            res[top] = i - top
        }
        // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
        stack.push(i)
    }
    // 返回结果数组
    return res
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));