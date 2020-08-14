
// Q-1

function types(value) {
    var m = value.constructor.name
    return m;
}
console.log(types([]))
console.log(types(123))
console.log(types(true))
console.log(types("abcd"))


//Q-2:

function check(input) {
    var arr = []
    for (element of input) {
        var x = true;
        var newele = element.replace(/ /g, "");
        for (let i = 0; i < newele.length; i++) {
            if (!isNaN(newele[i])) {
                x = false;
                break;
            }
        }
        if (!x) {
            arr.push(newele)
        }
    }
    var ans = arr.join(" ")
    return ans;

}
var a1 = ["ab1", "def", "3dc", "e5r"]
console.log(check(a1));


var a2 = ["abc", "abc10"]
console.log(check(a2));


var a3 = ["this is a test", "test1"]
console.log(check(a3));


var a4 = ["abc", "ab10c", "a10bc", "bcd"]
console.log(check(a4));
