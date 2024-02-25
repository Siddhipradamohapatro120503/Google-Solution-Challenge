class Community {
  constructor(communityId, name, description, members) {
    this.communityId = communityId;
    this.name = name;
    this.description = description;
    this.members = members;
  }

  getCommunityId() {
    return this.communityId;
  }

  toMap() {
    return {
      communityId: this.communityId,
      name: this.name,
      description: this.description,
      members: this.members,
    };
  }

  static fromMap(communityMap) {
    return new Community(
      communityMap.communityId,
      communityMap.name,
      communityMap.description,
      communityMap.members
    );
  }
}
