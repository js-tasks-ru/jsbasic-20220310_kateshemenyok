function makeFriendsList(friends) {
  const list = document.createElement("ul");

  friends.forEach((friend) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${friend.firstName} ${friend.lastName}`;

    list.append(listItem);
  });

  return list;
}
