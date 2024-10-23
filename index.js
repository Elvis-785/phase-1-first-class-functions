function greeting() {
    return "Hi guys";
}

function receivesAFunction(cb) {
    return cb();
}
receivesAFunction(greeting);

function returnsANamedFunction() {
    function fn() {
        return "The named function."
    }
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
        return "anonymous func"
    }
}