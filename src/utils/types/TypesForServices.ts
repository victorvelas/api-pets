export type Filter<T> = {
    [key: string]: T
};

export type standarFilter<F> = Filter<Number|string|Boolean|F[]|F>