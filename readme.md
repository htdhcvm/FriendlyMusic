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

| Method            | Url                                                    | Description                                   |
| ----------------- | ------------------------------------------------------ | --------------------------------------------- |
| GET               | /api/user/signIn/:login/:password                      |                                               |
| POST              | /api/user/registration                                 | Need Data : fio, login, password, retPassword |
| GET               | /api/user/getCountOnTypeVacancy                        |                                               |
| GET               | /api/visitor/getListVacancy                            |                                               |
| GET               | /api/user/search                                       |                                               |
| PARAMS :arrow_up: | /:keyWord/:city/:positionGroup/:experience             |                                               |
| PARAMS :arrow_up: | /:countVacancyOnPage/:salary/:existBase/:existMaterial |                                               |
| PARAMS :arrow_up: | /:existNumberPhone/:linkSocial                         |                                               |
| GET               | /api/visitor/getDataVacancy/:idVacancy                 |                                               |
| GET               | /api/visitor/getDataGroup/:idGroup                     |                                               |
| GET               | /api/user/dataUser/owner/:idUser                       |                                               |
| PUT               | /api/user/changeDataUser                               | Need Data : idUser                            |
| POST              | /api/user/createGroup                                  |                                               |
| GET               | /api/user/getDataGroup/Consist/:idUser                 |                                               |
| PUT               | /api/user/consist/eventOnAddMemberInGroup              | Need Data : idUser, idGroup, idMember         |
| PUT               | /api/user/consist/eventOnCancelMemberInGroup           | Need Data : idUser, idGroup, idMember         |
| PUT               | /api/user/consist/eventOnDeleteMemberGroupAgree        | Need Data : idUser, idGroup, idMember         |
| PUT               | /api/user/consist/eventOnDeleteMemberGroupDisagree     | Need Data : idUser, idGroup, idMember         |

TODO chat

| TODO | Add user in common chat with group | |

### Group

| Method | Url | Description |
| ------ | --- | ----------- |
|        |     |             |

Common query

/api/visitor/getListVacancy
