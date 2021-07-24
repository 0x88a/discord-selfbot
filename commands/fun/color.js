function hexToDec(hex) {
    var result = 0, digitValue;
    hex = hex.toLowerCase();
    for (var i = 0; i < hex.length; i++) {
        digitValue = '0123456789abcdefgh'.indexOf(hex[i]);
        result = result * 16 + digitValue;
    }
    return result;
}

module.exports = {
    name: 'hex',
    description: 'converts hexadecimal color to decimal color for dicord embeds',
    execute(message, client, args) {
        var hex = args[0];
        if (!hex) return;
        var dec = hexToDec(hex);
        message.channel.send(dec);
    }


}