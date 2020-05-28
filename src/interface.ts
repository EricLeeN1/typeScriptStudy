// interface Say {
//     (words: string): string
// }

// interface 接口
// ? 可选属性
// readonly 只读属性

interface User {
    name: string,
    age?: number,
    readonly isMale: boolean,
    // say: Say
    // say: (words: string) => string
}

const getUserName = (user: User) => user.age

interface Config {
    width?: number;
}

function CalculateAreas(config: Config): { area: number } {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}

let mySquare = CalculateAreas({ width: 10 } as Config);