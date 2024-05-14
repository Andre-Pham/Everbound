class Yonder {

    public static boundToRange(value: number, minValue: number, maxValue: number): number {
        return Math.max(Math.min(maxValue, value), minValue)
    }

}

export default Yonder;