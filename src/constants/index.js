const NAME_PATTERN = /^[A-Z][a-z]{0,255}$/;
const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,60}$/;
const SALT_ROUND = 6;

/**
 * @typedef {string} RoleType
 */

/**
 *@readonly
 * @enum {RoleType}
 */
const ROLE = Object.freeze( {
                              USER: 'USER',
                              ADMIN: 'ADMIN',
                              MODERATOR: 'MODERATOR',
                            } );

/**
 * @typedef {Symbol} ActionType
 */

/**
 *@readonly
 * @enum {ActionType}
 */
const ACTION = Object.freeze( {
                                CREATE: Symbol( 'CREATE' ),
                                READ: Symbol( 'READ' ),
                                UPDATE: Symbol( 'UPDATE' ),
                                DELETE: Symbol( 'DELETE' ),
                              } );

/**
 * @typedef {string} EntityType
 */

/**
 *@readonly
 * @enum {EntityType}
 */
const ENTITY = Object.freeze( {
                                ...ROLE,
                                TASK: 'TASK',
                              } );

module.exports = {
  NAME_PATTERN,
  SALT_ROUND,
  PASSWORD_PATTERN,
  ACTION,
  ENTITY,
  ROLE,
};
