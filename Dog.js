class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
        <img class="like-badge" src="images/badge-like.png" alt=" like logo" />
        <img class="nope-badge" src="images/badge-nope.png" alt=" nope logo" />
        <div class="feature-suggestion">
            <div class="dog-info">
                <h4> ${name}, ${age} </h4>
                <div class="dog-bio">
                    ${bio}
                </div>
            </div>
            <img class="dog-img" src="${avatar}">
        </div>
    `;
  }
}

export default Dog;
