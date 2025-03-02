export const calIndicatorPosition = (value: number, max: number, min: number) => {
    const percentage = (value - min) / (max - min);
    const limitationCheck = Math.min(Math.max(percentage, 0), 1);
    return limitationCheck * 100;
};

const calGradColor = (startRGB: string, endRGB: string, percentage: number) => {
    const matchRGB = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i;
    const matchedStartRGB = matchRGB.exec(startRGB);
    const matchedEndRGB = matchRGB.exec(endRGB);
    if (!matchedStartRGB || !matchedEndRGB) return null;

    const [startR, startG, startB] = matchedStartRGB.slice(1, 4).map(Number);
    const [endR, endG, endB] = matchedEndRGB.slice(1, 4).map(Number);
    const r = Math.round(startR + (endR - startR) * percentage);
    const g = Math.round(startG + (endG - startG) * percentage);
    const b = Math.round(startB + (endB - startB) * percentage);

    return `rgb(${r}, ${g}, ${b})`;
};

/**
 * 
 * @param gradingScaleConfig gradingScaleConfig key: {'min-max': text}
 * @example {'0-20': good,'20-40': normal,'40-100':good}
 * @param percentage value like 50,100
 */
export const calGradingScale = (gradingScaleConfig: Record<string, string>, percentage: number) => {
    const grade = Object.entries(gradingScaleConfig).find(([range]) => {
        const [min, max] = range.split('-');
        if (percentage >= Number(min) && percentage <= Number(max)) return true;
    });
    if (!grade) return null;
    const text = grade[1];

    const startRGB = 'rgb(220,38,38)'; // red-700
    const endStartRGB = 'rgb(34,163,74)'; // green-700
    const color = calGradColor(startRGB, endStartRGB, percentage / 100);

    return { text, color };
};