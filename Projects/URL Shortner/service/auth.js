const userUidMap = new Map()

function setUserId (uid, user) {

    userUidMap.set(uid, user)
}

function getUser (uid) {

    return userUidMap.get(uid)
}

module.exports = {
    setUserId,
    getUser,
}