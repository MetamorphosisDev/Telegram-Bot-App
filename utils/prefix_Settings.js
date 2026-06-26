module.exports = function prefix(command, dot = "\\.") {
    return new RegExp(`^${dot}${command}\\s+(.+)$`, "i")
}