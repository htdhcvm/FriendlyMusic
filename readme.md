# FriendlyMusic

## Api

### Visitor

| Method | Url                                    | Description |
| ------ | -------------------------------------- | ----------- |
| GET    | /api/visitor/getListVacancy            |             |
| GET    | /api/visitor/getListVacancy/:name      |             |
| GET    | /api/visitor/getDataVacancy/:idVacancy |             |
| GET    | /api/visitor/getDataGroup/:idGroup     |             |

### User

| Method   | Url                                                         | Description                              |
| -------- | ----------------------------------------------------------- | ---------------------------------------- |
| GET      | /api/user/signIn/:login/:password                           |                                          |
| POST     | /api/user/registration                                      | Data : fio, login, password, retPassword |
| GET      | /api/user/getCountOnTypeVacancy                             |                                          |
| GET      | /api/visitor/getListVacancy                                 |                                          |
| GET      | /api/visitor/getListVacancy/:name                           |                                          |
| GET      | /api/user/search/                                           |                                          |
| Params 🠡 | /:keyWord/:city/:positionGroup/:experience                  |                                          |
| Params 🠡 | /:countVacancyOnPage/:salary/:existBase/:existMaterial      |                                          |
| Params 🠡 | /:existNumberPhone/:linkSocial                              |                                          |
| GET      | /api/visitor/getDataVacancy/:idVacancy                      |                                          |
| GET      | /api/visitor/getDataGroup/:idGroup                          |                                          |
| GET      | /api/user/settings/dataUser/owner/:idUser                   |                                          |
| PUT      | /api/user/settings/changeDataUser                           |                                          |
| POST     | /api/user/settings/createGroup                              | Data: login, password, name              |
| GET      | /api/user/settings/getDataGroup/consist/:idUser             |                                          |
| PUT      | /api/user/settings/consist/eventOnAddMemberInGroup          | Data : idUser, idGroup, idMember         |
| PUT      | /api/user/settings/consist/eventOnCancelMemberInGroup       | Data : idUser, idGroup, idMember         |
| PUT      | /api/user/settings/consist/eventOnDeleteMemberGroupAgree    | Data : idUser, idGroup, idMember         |
| PUT      | /api/user/settings/consist/eventOnDeleteMemberGroupDisagree | Data : idUser, idGroup, idMember         |

### Group

| Method / Param | Url                                                   | Description             |
| -------------- | ----------------------------------------------------- | ----------------------- |
| GET            | /api/group/signIn/:login/:password                    |                         |
| GET            | /api/group/getCountOnTypeResume                       |                         |
| GET            | /api/group/search/                                    |                         |
| Params 🠡       | /:vacancy/:city/:experience/:countResumeOnPage<br />  |                         |
| Params 🠡       | /:age/:position/:style/:gander/:existSocialLink<br /> |                         |
| Params 🠡       | /:existTelephone/:existInstrument                     |                         |
| GET            | /api/group/getDataResume/:idResume                    |                         |
| GET            | /api/group/getDataUser/:idUser                        |                         |
| GET            | /api/group/settings/dataGroup/owner/:idGroup          |                         |
| PUT            | /api/group/settings/changeDataGroup                   |                         |
| GET            | /api/group/getAllParticipants/:idGroup                |                         |
| GET            | /api/group/getAllWilling/:idGroup                     |                         |
| POST           | /api/group/addWillingPerson                           | Data: idGroup, idPerson |
| POST           | /api/group/deleteMemberGroup                          | Data: idGroup, idMember |

TODO User chat. Add user in common chat with group. Send messages to group.

<!-- Common query</br>
/api/visitor/getListVacancy</br>
/api/visitor/getListVacancy/:name -->
