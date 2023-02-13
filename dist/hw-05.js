"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
console.log(compare({ name: "sadsad", color: "23" }, { position: 231, weight: 432 }));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: "Alisa" }, { age: 28 });
merged.name;
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const page = new Page({ title: "jasdhas" });
page.pageInfo();
//# sourceMappingURL=hw-05.js.map