# FriendlyMusic

qwe\qwe

## Api

### Visitor

| Method | Url                                    | Description |
| ------ | -------------------------------------- | ----------- |
| GET    | /api/visitor/getListVacancy            |             |
| GET    | /api/visitor/getListVacancy/:name      |             |
| GET    | /api/visitor/getDataVacancy/:idVacancy |             |
| GET    | /api/visitor/getDataGroup/:idGroup     |             |

### User

| Method | Url                                                                                                                                                              | Description                              |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| GET    | /api/user/signIn/:login/:password                                                                                                                                |                                          |
| POST   | /api/user/registration                                                                                                                                           | Data : fio, login, password, retPassword |
| GET    | /api/user/getCountOnTypeVacancy                                                                                                                                  |                                          |
| GET    | /api/visitor/getListVacancy                                                                                                                                      |                                          |
| GET    | /api/user/search<br />/:keyWord/:city/:positionGroup/:experience<br />/:countVacancyOnPage/:salary/:existBase/:existMaterial<br />/:existNumberPhone/:linkSocial |                                          |
| GET    | /api/visitor/getDataVacancy/:idVacancy                                                                                                                           |                                          |
| GET    | /api/visitor/getDataGroup/:idGroup                                                                                                                               |                                          |
| GET    | /api/user/dataUser/owner/:idUser                                                                                                                                 |                                          |
| PUT    | /api/user/changeDataUser                                                                                                                                         | Data : idUser                            |
| POST   | /api/user/createGroup                                                                                                                                            | Data: login, password, name              |
| GET    | /api/user/getDataGroup/Consist/:idUser                                                                                                                           |                                          |
| PUT    | /api/user/consist/eventOnAddMemberInGroup                                                                                                                        | Data : idUser, idGroup, idMember         |
| PUT    | /api/user/consist/eventOnCancelMemberInGroup                                                                                                                     | Data : idUser, idGroup, idMember         |
| PUT    | /api/user/consist/eventOnDeleteMemberGroupAgree                                                                                                                  | Data : idUser, idGroup, idMember         |
| PUT    | /api/user/consist/eventOnDeleteMemberGroupDisagree                                                                                                               | Data : idUser, idGroup, idMember         |

TODO chat. Add user in common chat with group. Send messages to group.

### Group

| Method | Url                                | Description |
| ------ | ---------------------------------- | ----------- |
|        | /api/group/signIn/:login/:password |             |

Common query

/api/visitor/getListVacancy
