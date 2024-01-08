import { Member, Profile,Server } from "@prisma/client"

export type ServerWithMembersWothProfiles = Server & {
    members:(Member & {profile:Profile})[]
;}