const { users } = require("../../models");
exports.updateAvatar = async function (username, avtUrl) {
  await users.update(
    { avatar: avtUrl },
    {
      where: {
        username: username,
      },
    }
  );
};
