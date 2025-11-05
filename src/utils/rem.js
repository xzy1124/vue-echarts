/**
 * 简化版移动端适配方案
 * 目的：确保能看到font-size随窗口大小变化的实时效果
 */

// // 配置：移除maxWidth限制，以便更容易看到变化效果
// const designWidth = 375; // 设计稿宽度
// const baseFontSize = 16; // 基础字体大小

// // 计算并设置根元素字体大小
// function setRootFontSize() {
//     const root = document.documentElement;

//     // 直接使用窗口宽度，不设置最大值限制
//     const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

//     // 计算缩放比例
//     const scale = viewportWidth / designWidth;

//     // 计算最终的根字体大小并设置
//     const fontSize = baseFontSize * scale;
//     root.style.fontSize = fontSize + 'px';

//     // 输出日志，方便调试观察
//     // console.log(`视口宽度: ${viewportWidth}px, 缩放比例: ${scale.toFixed(2)}, 根字体大小: ${fontSize.toFixed(2)}px`);
// }
// 修改设计稿宽度和基础字体大小配置
const designWidth = 1920; // 修改为桌面端设计稿宽度
const baseFontSize = 16; // 保持 1rem = 16px 的标准
const maxRootFontSize = 24; // 添加最大字体大小限制，防止大屏显示过大

// 修改 setRootFontSize 函数中的计算逻辑
function setRootFontSize() {
    const root = document.documentElement;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const scale = viewportWidth / designWidth;

    // 计算最终的根字体大小并应用最大值限制
    let fontSize = baseFontSize * scale;
    fontSize = Math.min(fontSize, maxRootFontSize);

    root.style.fontSize = fontSize + 'px';
}

// 初始化适配方案
function initAdaptation() {
    // 立即执行一次
    setRootFontSize();

    // 使用传统的resize事件，兼容性更好
    window.addEventListener('resize', setRootFontSize);
    window.addEventListener('orientationchange', setRootFontSize);

    // 页面加载完成后再执行一次
    window.addEventListener('load', setRootFontSize);

    // 清理函数
    return () => {
        window.removeEventListener('resize', setRootFontSize);
        window.removeEventListener('orientationchange', setRootFontSize);
        window.removeEventListener('load', setRootFontSize);
    };
}

// 自动初始化
if (typeof window !== 'undefined') {
    window.simpleAdaptation = {
        init: initAdaptation,
        config: {
            designWidth,
            baseFontSize
        }
    };
    window.simpleAdaptation.init();
}

export default window.simpleAdaptation;