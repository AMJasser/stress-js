const testFunc = (url, params, times) => {
    let testUrl = new URL(url);

    for (let key in params) {
        testUrl.searchParams.append(key, params[key]);
    }

    for (let i = 0; i < times; i++) {
        fetch(testUrl.toString())
            .then(res => {
                if (res.status === 200) {
                    console.log("Success");
                } else {
                    console.log("Error");
                }
            });
    }
}

class Stress {
    constructor() {
        this.tests = [];
    }

    addTest(url, params, times) {
        const test = () => testFunc(url, params, times);

        this.tests.push(test);
    }

    run() {
        this.tests.forEach(test => {
            test();
        });
    }
}

module.exports = Stress;