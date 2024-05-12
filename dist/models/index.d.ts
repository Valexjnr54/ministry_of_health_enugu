
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model inspection_review
 * 
 */
export type inspection_review = $Result.DefaultSelection<Prisma.$inspection_reviewPayload>
/**
 * Model inspector
 * 
 */
export type inspector = $Result.DefaultSelection<Prisma.$inspectorPayload>
/**
 * Model state
 * 
 */
export type state = $Result.DefaultSelection<Prisma.$statePayload>
/**
 * Model local_government
 * 
 */
export type local_government = $Result.DefaultSelection<Prisma.$local_governmentPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model food_handlers
 * 
 */
export type food_handlers = $Result.DefaultSelection<Prisma.$food_handlersPayload>
/**
 * Model personnel_payment
 * 
 */
export type personnel_payment = $Result.DefaultSelection<Prisma.$personnel_paymentPayload>
/**
 * Model facility_payment
 * 
 */
export type facility_payment = $Result.DefaultSelection<Prisma.$facility_paymentPayload>
/**
 * Model facility_complete_payment
 * 
 */
export type facility_complete_payment = $Result.DefaultSelection<Prisma.$facility_complete_paymentPayload>
/**
 * Model revokedToken
 * 
 */
export type revokedToken = $Result.DefaultSelection<Prisma.$revokedTokenPayload>
/**
 * Model facility
 * 
 */
export type facility = $Result.DefaultSelection<Prisma.$facilityPayload>
/**
 * Model facility_personnel
 * 
 */
export type facility_personnel = $Result.DefaultSelection<Prisma.$facility_personnelPayload>
/**
 * Model food_facility
 * 
 */
export type food_facility = $Result.DefaultSelection<Prisma.$food_facilityPayload>
/**
 * Model food_facility_personnel
 * 
 */
export type food_facility_personnel = $Result.DefaultSelection<Prisma.$food_facility_personnelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  User: 'User',
  Inspector: 'Inspector',
  Admin: 'Admin',
  Subadmin_facility: 'Subadmin_facility',
  Subadmin_foodhandler: 'Subadmin_foodhandler',
  Subadmin_personnel: 'Subadmin_personnel'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  Pending: 'Pending',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend',
  Verified: 'Verified'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Type: {
  Doctor: 'Doctor',
  Nurse: 'Nurse',
  Pharmacist: 'Pharmacist',
  Radiographer: 'Radiographer',
  Mid_wife: 'Mid_wife',
  Dentist: 'Dentist',
  Lab_Scientist: 'Lab_Scientist',
  Optometrist: 'Optometrist',
  Physiotherapist: 'Physiotherapist',
  Psychiatrist: 'Psychiatrist',
  Community_health_worker: 'Community_health_worker',
  Emergency_medical_technician: 'Emergency_medical_technician',
  Other: 'Other'
};

export type Type = (typeof Type)[keyof typeof Type]


export const Sector: {
  Private_sector_non_profit: 'Private_sector_non_profit',
  Private_sector_profit: 'Private_sector_profit',
  Federal_government_agency: 'Federal_government_agency',
  State_government_agency: 'State_government_agency',
  Local_government_agency: 'Local_government_agency'
};

export type Sector = (typeof Sector)[keyof typeof Sector]


export const Facility_Type: {
  Specialist_hospital: 'Specialist_hospital',
  Specialist_eye_hospital: 'Specialist_eye_hospital',
  Specialist_clinic: 'Specialist_clinic',
  General_hospital: 'General_hospital',
  Outpatient_medical_clinic: 'Outpatient_medical_clinic',
  Maternity_home: 'Maternity_home',
  Grade_1_medical_lab: 'Grade_1_medical_lab',
  Grade_2_medical_lab: 'Grade_2_medical_lab',
  Grade_3_medical_lab: 'Grade_3_medical_lab',
  Grade_4_medical_lab: 'Grade_4_medical_lab',
  Dental_center: 'Dental_center',
  Dental_clinic: 'Dental_clinic',
  Eye_clinic: 'Eye_clinic',
  Eye_center: 'Eye_center',
  Xray_center: 'Xray_center',
  Physiotherapy_center: 'Physiotherapy_center',
  Radiotherapy_center: 'Radiotherapy_center',
  Mortuary: 'Mortuary',
  Ultrasound: 'Ultrasound'
};

export type Facility_Type = (typeof Facility_Type)[keyof typeof Facility_Type]


export const Level: {
  Primary: 'Primary',
  Secondary: 'Secondary',
  Tertiary: 'Tertiary'
};

export type Level = (typeof Level)[keyof typeof Level]


export const Category: {
  Three_star_hotel: 'Three_star_hotel',
  Regular: 'Regular',
  Motel: 'Motel',
  Fine_dining: 'Fine_dining',
  Casual_dining: 'Casual_dining',
  Cafes_and_Bistros: 'Cafes_and_Bistros',
  Buffet: 'Buffet',
  Fast_food: 'Fast_food'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type Sector = $Enums.Sector

export const Sector: typeof $Enums.Sector

export type Facility_Type = $Enums.Facility_Type

export const Facility_Type: typeof $Enums.Facility_Type

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;

  /**
   * `prisma.inspection_review`: Exposes CRUD operations for the **inspection_review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inspection_reviews
    * const inspection_reviews = await prisma.inspection_review.findMany()
    * ```
    */
  get inspection_review(): Prisma.inspection_reviewDelegate<ExtArgs>;

  /**
   * `prisma.inspector`: Exposes CRUD operations for the **inspector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inspectors
    * const inspectors = await prisma.inspector.findMany()
    * ```
    */
  get inspector(): Prisma.inspectorDelegate<ExtArgs>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **state** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.stateDelegate<ExtArgs>;

  /**
   * `prisma.local_government`: Exposes CRUD operations for the **local_government** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Local_governments
    * const local_governments = await prisma.local_government.findMany()
    * ```
    */
  get local_government(): Prisma.local_governmentDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.food_handlers`: Exposes CRUD operations for the **food_handlers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_handlers
    * const food_handlers = await prisma.food_handlers.findMany()
    * ```
    */
  get food_handlers(): Prisma.food_handlersDelegate<ExtArgs>;

  /**
   * `prisma.personnel_payment`: Exposes CRUD operations for the **personnel_payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personnel_payments
    * const personnel_payments = await prisma.personnel_payment.findMany()
    * ```
    */
  get personnel_payment(): Prisma.personnel_paymentDelegate<ExtArgs>;

  /**
   * `prisma.facility_payment`: Exposes CRUD operations for the **facility_payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facility_payments
    * const facility_payments = await prisma.facility_payment.findMany()
    * ```
    */
  get facility_payment(): Prisma.facility_paymentDelegate<ExtArgs>;

  /**
   * `prisma.facility_complete_payment`: Exposes CRUD operations for the **facility_complete_payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facility_complete_payments
    * const facility_complete_payments = await prisma.facility_complete_payment.findMany()
    * ```
    */
  get facility_complete_payment(): Prisma.facility_complete_paymentDelegate<ExtArgs>;

  /**
   * `prisma.revokedToken`: Exposes CRUD operations for the **revokedToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevokedTokens
    * const revokedTokens = await prisma.revokedToken.findMany()
    * ```
    */
  get revokedToken(): Prisma.revokedTokenDelegate<ExtArgs>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.facilityDelegate<ExtArgs>;

  /**
   * `prisma.facility_personnel`: Exposes CRUD operations for the **facility_personnel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facility_personnels
    * const facility_personnels = await prisma.facility_personnel.findMany()
    * ```
    */
  get facility_personnel(): Prisma.facility_personnelDelegate<ExtArgs>;

  /**
   * `prisma.food_facility`: Exposes CRUD operations for the **food_facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_facilities
    * const food_facilities = await prisma.food_facility.findMany()
    * ```
    */
  get food_facility(): Prisma.food_facilityDelegate<ExtArgs>;

  /**
   * `prisma.food_facility_personnel`: Exposes CRUD operations for the **food_facility_personnel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_facility_personnels
    * const food_facility_personnels = await prisma.food_facility_personnel.findMany()
    * ```
    */
  get food_facility_personnel(): Prisma.food_facility_personnelDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    inspection_review: 'inspection_review',
    inspector: 'inspector',
    state: 'state',
    local_government: 'local_government',
    users: 'users',
    food_handlers: 'food_handlers',
    personnel_payment: 'personnel_payment',
    facility_payment: 'facility_payment',
    facility_complete_payment: 'facility_complete_payment',
    revokedToken: 'revokedToken',
    facility: 'facility',
    facility_personnel: 'facility_personnel',
    food_facility: 'food_facility',
    food_facility_personnel: 'food_facility_personnel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'inspection_review' | 'inspector' | 'state' | 'local_government' | 'users' | 'food_handlers' | 'personnel_payment' | 'facility_payment' | 'facility_complete_payment' | 'revokedToken' | 'facility' | 'facility_personnel' | 'food_facility' | 'food_facility_personnel'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      inspection_review: {
        payload: Prisma.$inspection_reviewPayload<ExtArgs>
        fields: Prisma.inspection_reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inspection_reviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inspection_reviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload>
          }
          findFirst: {
            args: Prisma.inspection_reviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inspection_reviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload>
          }
          findMany: {
            args: Prisma.inspection_reviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload>[]
          }
          create: {
            args: Prisma.inspection_reviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload>
          }
          createMany: {
            args: Prisma.inspection_reviewCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.inspection_reviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload>
          }
          update: {
            args: Prisma.inspection_reviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload>
          }
          deleteMany: {
            args: Prisma.inspection_reviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.inspection_reviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.inspection_reviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspection_reviewPayload>
          }
          aggregate: {
            args: Prisma.Inspection_reviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInspection_review>
          }
          groupBy: {
            args: Prisma.inspection_reviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Inspection_reviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.inspection_reviewCountArgs<ExtArgs>,
            result: $Utils.Optional<Inspection_reviewCountAggregateOutputType> | number
          }
        }
      }
      inspector: {
        payload: Prisma.$inspectorPayload<ExtArgs>
        fields: Prisma.inspectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inspectorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inspectorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload>
          }
          findFirst: {
            args: Prisma.inspectorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inspectorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload>
          }
          findMany: {
            args: Prisma.inspectorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload>[]
          }
          create: {
            args: Prisma.inspectorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload>
          }
          createMany: {
            args: Prisma.inspectorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.inspectorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload>
          }
          update: {
            args: Prisma.inspectorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload>
          }
          deleteMany: {
            args: Prisma.inspectorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.inspectorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.inspectorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inspectorPayload>
          }
          aggregate: {
            args: Prisma.InspectorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInspector>
          }
          groupBy: {
            args: Prisma.inspectorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InspectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.inspectorCountArgs<ExtArgs>,
            result: $Utils.Optional<InspectorCountAggregateOutputType> | number
          }
        }
      }
      state: {
        payload: Prisma.$statePayload<ExtArgs>
        fields: Prisma.stateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          findFirst: {
            args: Prisma.stateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          findMany: {
            args: Prisma.stateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>[]
          }
          create: {
            args: Prisma.stateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          createMany: {
            args: Prisma.stateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.stateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          update: {
            args: Prisma.stateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          deleteMany: {
            args: Prisma.stateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.stateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.stateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.stateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.stateCountArgs<ExtArgs>,
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      local_government: {
        payload: Prisma.$local_governmentPayload<ExtArgs>
        fields: Prisma.local_governmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.local_governmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.local_governmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload>
          }
          findFirst: {
            args: Prisma.local_governmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.local_governmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload>
          }
          findMany: {
            args: Prisma.local_governmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload>[]
          }
          create: {
            args: Prisma.local_governmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload>
          }
          createMany: {
            args: Prisma.local_governmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.local_governmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload>
          }
          update: {
            args: Prisma.local_governmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload>
          }
          deleteMany: {
            args: Prisma.local_governmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.local_governmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.local_governmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$local_governmentPayload>
          }
          aggregate: {
            args: Prisma.Local_governmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocal_government>
          }
          groupBy: {
            args: Prisma.local_governmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Local_governmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.local_governmentCountArgs<ExtArgs>,
            result: $Utils.Optional<Local_governmentCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      food_handlers: {
        payload: Prisma.$food_handlersPayload<ExtArgs>
        fields: Prisma.food_handlersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.food_handlersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.food_handlersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload>
          }
          findFirst: {
            args: Prisma.food_handlersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.food_handlersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload>
          }
          findMany: {
            args: Prisma.food_handlersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload>[]
          }
          create: {
            args: Prisma.food_handlersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload>
          }
          createMany: {
            args: Prisma.food_handlersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.food_handlersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload>
          }
          update: {
            args: Prisma.food_handlersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload>
          }
          deleteMany: {
            args: Prisma.food_handlersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.food_handlersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.food_handlersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_handlersPayload>
          }
          aggregate: {
            args: Prisma.Food_handlersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFood_handlers>
          }
          groupBy: {
            args: Prisma.food_handlersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Food_handlersGroupByOutputType>[]
          }
          count: {
            args: Prisma.food_handlersCountArgs<ExtArgs>,
            result: $Utils.Optional<Food_handlersCountAggregateOutputType> | number
          }
        }
      }
      personnel_payment: {
        payload: Prisma.$personnel_paymentPayload<ExtArgs>
        fields: Prisma.personnel_paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personnel_paymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personnel_paymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload>
          }
          findFirst: {
            args: Prisma.personnel_paymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personnel_paymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload>
          }
          findMany: {
            args: Prisma.personnel_paymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload>[]
          }
          create: {
            args: Prisma.personnel_paymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload>
          }
          createMany: {
            args: Prisma.personnel_paymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.personnel_paymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload>
          }
          update: {
            args: Prisma.personnel_paymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload>
          }
          deleteMany: {
            args: Prisma.personnel_paymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.personnel_paymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.personnel_paymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$personnel_paymentPayload>
          }
          aggregate: {
            args: Prisma.Personnel_paymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePersonnel_payment>
          }
          groupBy: {
            args: Prisma.personnel_paymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Personnel_paymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.personnel_paymentCountArgs<ExtArgs>,
            result: $Utils.Optional<Personnel_paymentCountAggregateOutputType> | number
          }
        }
      }
      facility_payment: {
        payload: Prisma.$facility_paymentPayload<ExtArgs>
        fields: Prisma.facility_paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facility_paymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facility_paymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload>
          }
          findFirst: {
            args: Prisma.facility_paymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facility_paymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload>
          }
          findMany: {
            args: Prisma.facility_paymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload>[]
          }
          create: {
            args: Prisma.facility_paymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload>
          }
          createMany: {
            args: Prisma.facility_paymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.facility_paymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload>
          }
          update: {
            args: Prisma.facility_paymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload>
          }
          deleteMany: {
            args: Prisma.facility_paymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.facility_paymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.facility_paymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_paymentPayload>
          }
          aggregate: {
            args: Prisma.Facility_paymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacility_payment>
          }
          groupBy: {
            args: Prisma.facility_paymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Facility_paymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.facility_paymentCountArgs<ExtArgs>,
            result: $Utils.Optional<Facility_paymentCountAggregateOutputType> | number
          }
        }
      }
      facility_complete_payment: {
        payload: Prisma.$facility_complete_paymentPayload<ExtArgs>
        fields: Prisma.facility_complete_paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facility_complete_paymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facility_complete_paymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload>
          }
          findFirst: {
            args: Prisma.facility_complete_paymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facility_complete_paymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload>
          }
          findMany: {
            args: Prisma.facility_complete_paymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload>[]
          }
          create: {
            args: Prisma.facility_complete_paymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload>
          }
          createMany: {
            args: Prisma.facility_complete_paymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.facility_complete_paymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload>
          }
          update: {
            args: Prisma.facility_complete_paymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload>
          }
          deleteMany: {
            args: Prisma.facility_complete_paymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.facility_complete_paymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.facility_complete_paymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_complete_paymentPayload>
          }
          aggregate: {
            args: Prisma.Facility_complete_paymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacility_complete_payment>
          }
          groupBy: {
            args: Prisma.facility_complete_paymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Facility_complete_paymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.facility_complete_paymentCountArgs<ExtArgs>,
            result: $Utils.Optional<Facility_complete_paymentCountAggregateOutputType> | number
          }
        }
      }
      revokedToken: {
        payload: Prisma.$revokedTokenPayload<ExtArgs>
        fields: Prisma.revokedTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.revokedTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.revokedTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload>
          }
          findFirst: {
            args: Prisma.revokedTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.revokedTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload>
          }
          findMany: {
            args: Prisma.revokedTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload>[]
          }
          create: {
            args: Prisma.revokedTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload>
          }
          createMany: {
            args: Prisma.revokedTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.revokedTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload>
          }
          update: {
            args: Prisma.revokedTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload>
          }
          deleteMany: {
            args: Prisma.revokedTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.revokedTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.revokedTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$revokedTokenPayload>
          }
          aggregate: {
            args: Prisma.RevokedTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRevokedToken>
          }
          groupBy: {
            args: Prisma.revokedTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RevokedTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.revokedTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<RevokedTokenCountAggregateOutputType> | number
          }
        }
      }
      facility: {
        payload: Prisma.$facilityPayload<ExtArgs>
        fields: Prisma.facilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          findFirst: {
            args: Prisma.facilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          findMany: {
            args: Prisma.facilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>[]
          }
          create: {
            args: Prisma.facilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          createMany: {
            args: Prisma.facilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.facilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          update: {
            args: Prisma.facilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          deleteMany: {
            args: Prisma.facilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.facilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.facilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.facilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.facilityCountArgs<ExtArgs>,
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      facility_personnel: {
        payload: Prisma.$facility_personnelPayload<ExtArgs>
        fields: Prisma.facility_personnelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facility_personnelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facility_personnelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload>
          }
          findFirst: {
            args: Prisma.facility_personnelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facility_personnelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload>
          }
          findMany: {
            args: Prisma.facility_personnelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload>[]
          }
          create: {
            args: Prisma.facility_personnelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload>
          }
          createMany: {
            args: Prisma.facility_personnelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.facility_personnelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload>
          }
          update: {
            args: Prisma.facility_personnelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload>
          }
          deleteMany: {
            args: Prisma.facility_personnelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.facility_personnelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.facility_personnelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$facility_personnelPayload>
          }
          aggregate: {
            args: Prisma.Facility_personnelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacility_personnel>
          }
          groupBy: {
            args: Prisma.facility_personnelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Facility_personnelGroupByOutputType>[]
          }
          count: {
            args: Prisma.facility_personnelCountArgs<ExtArgs>,
            result: $Utils.Optional<Facility_personnelCountAggregateOutputType> | number
          }
        }
      }
      food_facility: {
        payload: Prisma.$food_facilityPayload<ExtArgs>
        fields: Prisma.food_facilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.food_facilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.food_facilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload>
          }
          findFirst: {
            args: Prisma.food_facilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.food_facilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload>
          }
          findMany: {
            args: Prisma.food_facilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload>[]
          }
          create: {
            args: Prisma.food_facilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload>
          }
          createMany: {
            args: Prisma.food_facilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.food_facilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload>
          }
          update: {
            args: Prisma.food_facilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload>
          }
          deleteMany: {
            args: Prisma.food_facilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.food_facilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.food_facilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facilityPayload>
          }
          aggregate: {
            args: Prisma.Food_facilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFood_facility>
          }
          groupBy: {
            args: Prisma.food_facilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Food_facilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.food_facilityCountArgs<ExtArgs>,
            result: $Utils.Optional<Food_facilityCountAggregateOutputType> | number
          }
        }
      }
      food_facility_personnel: {
        payload: Prisma.$food_facility_personnelPayload<ExtArgs>
        fields: Prisma.food_facility_personnelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.food_facility_personnelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.food_facility_personnelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload>
          }
          findFirst: {
            args: Prisma.food_facility_personnelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.food_facility_personnelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload>
          }
          findMany: {
            args: Prisma.food_facility_personnelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload>[]
          }
          create: {
            args: Prisma.food_facility_personnelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload>
          }
          createMany: {
            args: Prisma.food_facility_personnelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.food_facility_personnelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload>
          }
          update: {
            args: Prisma.food_facility_personnelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload>
          }
          deleteMany: {
            args: Prisma.food_facility_personnelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.food_facility_personnelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.food_facility_personnelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$food_facility_personnelPayload>
          }
          aggregate: {
            args: Prisma.Food_facility_personnelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFood_facility_personnel>
          }
          groupBy: {
            args: Prisma.food_facility_personnelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Food_facility_personnelGroupByOutputType>[]
          }
          count: {
            args: Prisma.food_facility_personnelCountArgs<ExtArgs>,
            result: $Utils.Optional<Food_facility_personnelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InspectorCountOutputType
   */

  export type InspectorCountOutputType = {
    facility: number
  }

  export type InspectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | InspectorCountOutputTypeCountFacilityArgs
  }

  // Custom InputTypes
  /**
   * InspectorCountOutputType without action
   */
  export type InspectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectorCountOutputType
     */
    select?: InspectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InspectorCountOutputType without action
   */
  export type InspectorCountOutputTypeCountFacilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facilityWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    local_government: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    local_government?: boolean | StateCountOutputTypeCountLocal_governmentArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountLocal_governmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: local_governmentWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    facility_personnel: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_personnel?: boolean | UsersCountOutputTypeCountFacility_personnelArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFacility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_personnelWhereInput
  }


  /**
   * Count Type Food_handlersCountOutputType
   */

  export type Food_handlersCountOutputType = {
    food_facility_personnel: number
  }

  export type Food_handlersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_facility_personnel?: boolean | Food_handlersCountOutputTypeCountFood_facility_personnelArgs
  }

  // Custom InputTypes
  /**
   * Food_handlersCountOutputType without action
   */
  export type Food_handlersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_handlersCountOutputType
     */
    select?: Food_handlersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Food_handlersCountOutputType without action
   */
  export type Food_handlersCountOutputTypeCountFood_facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_facility_personnelWhereInput
  }


  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    facility_personnel: number
    inspection_review: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_personnel?: boolean | FacilityCountOutputTypeCountFacility_personnelArgs
    inspection_review?: boolean | FacilityCountOutputTypeCountInspection_reviewArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountFacility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_personnelWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountInspection_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inspection_reviewWhereInput
  }


  /**
   * Count Type Food_facilityCountOutputType
   */

  export type Food_facilityCountOutputType = {
    food_facility_personnel: number
  }

  export type Food_facilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_facility_personnel?: boolean | Food_facilityCountOutputTypeCountFood_facility_personnelArgs
  }

  // Custom InputTypes
  /**
   * Food_facilityCountOutputType without action
   */
  export type Food_facilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_facilityCountOutputType
     */
    select?: Food_facilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Food_facilityCountOutputType without action
   */
  export type Food_facilityCountOutputTypeCountFood_facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_facility_personnelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    reset_password_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    reset_password_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    role: number
    profile_image: number
    password: number
    reset_password_token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    reset_password_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    reset_password_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    reset_password_token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    role: $Enums.Role
    profile_image: string
    password: string
    reset_password_token: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    reset_password_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    reset_password_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      role: $Enums.Role
      profile_image: string
      password: string
      reset_password_token: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adminCreateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {adminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adminDeleteArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends adminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpsertArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly fullname: FieldRef<"admin", 'String'>
    readonly username: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly role: FieldRef<"admin", 'Role'>
    readonly profile_image: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly reset_password_token: FieldRef<"admin", 'String'>
    readonly createdAt: FieldRef<"admin", 'DateTime'>
    readonly updatedAt: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
  }


  /**
   * Model inspection_review
   */

  export type AggregateInspection_review = {
    _count: Inspection_reviewCountAggregateOutputType | null
    _avg: Inspection_reviewAvgAggregateOutputType | null
    _sum: Inspection_reviewSumAggregateOutputType | null
    _min: Inspection_reviewMinAggregateOutputType | null
    _max: Inspection_reviewMaxAggregateOutputType | null
  }

  export type Inspection_reviewAvgAggregateOutputType = {
    id: number | null
    facility_id: number | null
  }

  export type Inspection_reviewSumAggregateOutputType = {
    id: number | null
    facility_id: number | null
  }

  export type Inspection_reviewMinAggregateOutputType = {
    id: number | null
    facility_id: number | null
    cac: boolean | null
    owner_nin: boolean | null
    services_offered: boolean | null
    number_of_bed: boolean | null
    source_of_water: boolean | null
    method_of_disposal: boolean | null
    site_plan: boolean | null
    building_plan: boolean | null
    compliance_certificate: boolean | null
    tax_clearance_certificate: boolean | null
    facility_personnel_count: boolean | null
    facility_personnel: boolean | null
    review: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Inspection_reviewMaxAggregateOutputType = {
    id: number | null
    facility_id: number | null
    cac: boolean | null
    owner_nin: boolean | null
    services_offered: boolean | null
    number_of_bed: boolean | null
    source_of_water: boolean | null
    method_of_disposal: boolean | null
    site_plan: boolean | null
    building_plan: boolean | null
    compliance_certificate: boolean | null
    tax_clearance_certificate: boolean | null
    facility_personnel_count: boolean | null
    facility_personnel: boolean | null
    review: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Inspection_reviewCountAggregateOutputType = {
    id: number
    facility_id: number
    cac: number
    owner_nin: number
    services_offered: number
    number_of_bed: number
    source_of_water: number
    method_of_disposal: number
    site_plan: number
    building_plan: number
    compliance_certificate: number
    tax_clearance_certificate: number
    facility_personnel_count: number
    facility_personnel: number
    review: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Inspection_reviewAvgAggregateInputType = {
    id?: true
    facility_id?: true
  }

  export type Inspection_reviewSumAggregateInputType = {
    id?: true
    facility_id?: true
  }

  export type Inspection_reviewMinAggregateInputType = {
    id?: true
    facility_id?: true
    cac?: true
    owner_nin?: true
    services_offered?: true
    number_of_bed?: true
    source_of_water?: true
    method_of_disposal?: true
    site_plan?: true
    building_plan?: true
    compliance_certificate?: true
    tax_clearance_certificate?: true
    facility_personnel_count?: true
    facility_personnel?: true
    review?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Inspection_reviewMaxAggregateInputType = {
    id?: true
    facility_id?: true
    cac?: true
    owner_nin?: true
    services_offered?: true
    number_of_bed?: true
    source_of_water?: true
    method_of_disposal?: true
    site_plan?: true
    building_plan?: true
    compliance_certificate?: true
    tax_clearance_certificate?: true
    facility_personnel_count?: true
    facility_personnel?: true
    review?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Inspection_reviewCountAggregateInputType = {
    id?: true
    facility_id?: true
    cac?: true
    owner_nin?: true
    services_offered?: true
    number_of_bed?: true
    source_of_water?: true
    method_of_disposal?: true
    site_plan?: true
    building_plan?: true
    compliance_certificate?: true
    tax_clearance_certificate?: true
    facility_personnel_count?: true
    facility_personnel?: true
    review?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Inspection_reviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inspection_review to aggregate.
     */
    where?: inspection_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspection_reviews to fetch.
     */
    orderBy?: inspection_reviewOrderByWithRelationInput | inspection_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inspection_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspection_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspection_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inspection_reviews
    **/
    _count?: true | Inspection_reviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inspection_reviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inspection_reviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inspection_reviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inspection_reviewMaxAggregateInputType
  }

  export type GetInspection_reviewAggregateType<T extends Inspection_reviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInspection_review]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspection_review[P]>
      : GetScalarType<T[P], AggregateInspection_review[P]>
  }




  export type inspection_reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inspection_reviewWhereInput
    orderBy?: inspection_reviewOrderByWithAggregationInput | inspection_reviewOrderByWithAggregationInput[]
    by: Inspection_reviewScalarFieldEnum[] | Inspection_reviewScalarFieldEnum
    having?: inspection_reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inspection_reviewCountAggregateInputType | true
    _avg?: Inspection_reviewAvgAggregateInputType
    _sum?: Inspection_reviewSumAggregateInputType
    _min?: Inspection_reviewMinAggregateInputType
    _max?: Inspection_reviewMaxAggregateInputType
  }

  export type Inspection_reviewGroupByOutputType = {
    id: number
    facility_id: number
    cac: boolean
    owner_nin: boolean
    services_offered: boolean
    number_of_bed: boolean
    source_of_water: boolean
    method_of_disposal: boolean
    site_plan: boolean
    building_plan: boolean
    compliance_certificate: boolean | null
    tax_clearance_certificate: boolean
    facility_personnel_count: boolean
    facility_personnel: boolean
    review: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: Inspection_reviewCountAggregateOutputType | null
    _avg: Inspection_reviewAvgAggregateOutputType | null
    _sum: Inspection_reviewSumAggregateOutputType | null
    _min: Inspection_reviewMinAggregateOutputType | null
    _max: Inspection_reviewMaxAggregateOutputType | null
  }

  type GetInspection_reviewGroupByPayload<T extends inspection_reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inspection_reviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inspection_reviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inspection_reviewGroupByOutputType[P]>
            : GetScalarType<T[P], Inspection_reviewGroupByOutputType[P]>
        }
      >
    >


  export type inspection_reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facility_id?: boolean
    cac?: boolean
    owner_nin?: boolean
    services_offered?: boolean
    number_of_bed?: boolean
    source_of_water?: boolean
    method_of_disposal?: boolean
    site_plan?: boolean
    building_plan?: boolean
    compliance_certificate?: boolean
    tax_clearance_certificate?: boolean
    facility_personnel_count?: boolean
    facility_personnel?: boolean
    review?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | facilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspection_review"]>

  export type inspection_reviewSelectScalar = {
    id?: boolean
    facility_id?: boolean
    cac?: boolean
    owner_nin?: boolean
    services_offered?: boolean
    number_of_bed?: boolean
    source_of_water?: boolean
    method_of_disposal?: boolean
    site_plan?: boolean
    building_plan?: boolean
    compliance_certificate?: boolean
    tax_clearance_certificate?: boolean
    facility_personnel_count?: boolean
    facility_personnel?: boolean
    review?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type inspection_reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | facilityDefaultArgs<ExtArgs>
  }


  export type $inspection_reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inspection_review"
    objects: {
      facility: Prisma.$facilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facility_id: number
      cac: boolean
      owner_nin: boolean
      services_offered: boolean
      number_of_bed: boolean
      source_of_water: boolean
      method_of_disposal: boolean
      site_plan: boolean
      building_plan: boolean
      compliance_certificate: boolean | null
      tax_clearance_certificate: boolean
      facility_personnel_count: boolean
      facility_personnel: boolean
      review: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inspection_review"]>
    composites: {}
  }


  type inspection_reviewGetPayload<S extends boolean | null | undefined | inspection_reviewDefaultArgs> = $Result.GetResult<Prisma.$inspection_reviewPayload, S>

  type inspection_reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inspection_reviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Inspection_reviewCountAggregateInputType | true
    }

  export interface inspection_reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inspection_review'], meta: { name: 'inspection_review' } }
    /**
     * Find zero or one Inspection_review that matches the filter.
     * @param {inspection_reviewFindUniqueArgs} args - Arguments to find a Inspection_review
     * @example
     * // Get one Inspection_review
     * const inspection_review = await prisma.inspection_review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inspection_reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inspection_reviewFindUniqueArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inspection_review that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inspection_reviewFindUniqueOrThrowArgs} args - Arguments to find a Inspection_review
     * @example
     * // Get one Inspection_review
     * const inspection_review = await prisma.inspection_review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inspection_reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inspection_reviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inspection_review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspection_reviewFindFirstArgs} args - Arguments to find a Inspection_review
     * @example
     * // Get one Inspection_review
     * const inspection_review = await prisma.inspection_review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inspection_reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inspection_reviewFindFirstArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inspection_review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspection_reviewFindFirstOrThrowArgs} args - Arguments to find a Inspection_review
     * @example
     * // Get one Inspection_review
     * const inspection_review = await prisma.inspection_review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inspection_reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inspection_reviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inspection_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspection_reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inspection_reviews
     * const inspection_reviews = await prisma.inspection_review.findMany()
     * 
     * // Get first 10 Inspection_reviews
     * const inspection_reviews = await prisma.inspection_review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspection_reviewWithIdOnly = await prisma.inspection_review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends inspection_reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspection_reviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inspection_review.
     * @param {inspection_reviewCreateArgs} args - Arguments to create a Inspection_review.
     * @example
     * // Create one Inspection_review
     * const Inspection_review = await prisma.inspection_review.create({
     *   data: {
     *     // ... data to create a Inspection_review
     *   }
     * })
     * 
    **/
    create<T extends inspection_reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inspection_reviewCreateArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inspection_reviews.
     *     @param {inspection_reviewCreateManyArgs} args - Arguments to create many Inspection_reviews.
     *     @example
     *     // Create many Inspection_reviews
     *     const inspection_review = await prisma.inspection_review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends inspection_reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspection_reviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inspection_review.
     * @param {inspection_reviewDeleteArgs} args - Arguments to delete one Inspection_review.
     * @example
     * // Delete one Inspection_review
     * const Inspection_review = await prisma.inspection_review.delete({
     *   where: {
     *     // ... filter to delete one Inspection_review
     *   }
     * })
     * 
    **/
    delete<T extends inspection_reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inspection_reviewDeleteArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inspection_review.
     * @param {inspection_reviewUpdateArgs} args - Arguments to update one Inspection_review.
     * @example
     * // Update one Inspection_review
     * const inspection_review = await prisma.inspection_review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inspection_reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inspection_reviewUpdateArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inspection_reviews.
     * @param {inspection_reviewDeleteManyArgs} args - Arguments to filter Inspection_reviews to delete.
     * @example
     * // Delete a few Inspection_reviews
     * const { count } = await prisma.inspection_review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inspection_reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspection_reviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspection_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspection_reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inspection_reviews
     * const inspection_review = await prisma.inspection_review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inspection_reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inspection_reviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inspection_review.
     * @param {inspection_reviewUpsertArgs} args - Arguments to update or create a Inspection_review.
     * @example
     * // Update or create a Inspection_review
     * const inspection_review = await prisma.inspection_review.upsert({
     *   create: {
     *     // ... data to create a Inspection_review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inspection_review we want to update
     *   }
     * })
    **/
    upsert<T extends inspection_reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inspection_reviewUpsertArgs<ExtArgs>>
    ): Prisma__inspection_reviewClient<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inspection_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspection_reviewCountArgs} args - Arguments to filter Inspection_reviews to count.
     * @example
     * // Count the number of Inspection_reviews
     * const count = await prisma.inspection_review.count({
     *   where: {
     *     // ... the filter for the Inspection_reviews we want to count
     *   }
     * })
    **/
    count<T extends inspection_reviewCountArgs>(
      args?: Subset<T, inspection_reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inspection_reviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inspection_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inspection_reviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inspection_reviewAggregateArgs>(args: Subset<T, Inspection_reviewAggregateArgs>): Prisma.PrismaPromise<GetInspection_reviewAggregateType<T>>

    /**
     * Group by Inspection_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspection_reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inspection_reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inspection_reviewGroupByArgs['orderBy'] }
        : { orderBy?: inspection_reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inspection_reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspection_reviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inspection_review model
   */
  readonly fields: inspection_reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inspection_review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inspection_reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    facility<T extends facilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, facilityDefaultArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the inspection_review model
   */ 
  interface inspection_reviewFieldRefs {
    readonly id: FieldRef<"inspection_review", 'Int'>
    readonly facility_id: FieldRef<"inspection_review", 'Int'>
    readonly cac: FieldRef<"inspection_review", 'Boolean'>
    readonly owner_nin: FieldRef<"inspection_review", 'Boolean'>
    readonly services_offered: FieldRef<"inspection_review", 'Boolean'>
    readonly number_of_bed: FieldRef<"inspection_review", 'Boolean'>
    readonly source_of_water: FieldRef<"inspection_review", 'Boolean'>
    readonly method_of_disposal: FieldRef<"inspection_review", 'Boolean'>
    readonly site_plan: FieldRef<"inspection_review", 'Boolean'>
    readonly building_plan: FieldRef<"inspection_review", 'Boolean'>
    readonly compliance_certificate: FieldRef<"inspection_review", 'Boolean'>
    readonly tax_clearance_certificate: FieldRef<"inspection_review", 'Boolean'>
    readonly facility_personnel_count: FieldRef<"inspection_review", 'Boolean'>
    readonly facility_personnel: FieldRef<"inspection_review", 'Boolean'>
    readonly review: FieldRef<"inspection_review", 'String'>
    readonly status: FieldRef<"inspection_review", 'Status'>
    readonly createdAt: FieldRef<"inspection_review", 'DateTime'>
    readonly updatedAt: FieldRef<"inspection_review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inspection_review findUnique
   */
  export type inspection_reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * Filter, which inspection_review to fetch.
     */
    where: inspection_reviewWhereUniqueInput
  }

  /**
   * inspection_review findUniqueOrThrow
   */
  export type inspection_reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * Filter, which inspection_review to fetch.
     */
    where: inspection_reviewWhereUniqueInput
  }

  /**
   * inspection_review findFirst
   */
  export type inspection_reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * Filter, which inspection_review to fetch.
     */
    where?: inspection_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspection_reviews to fetch.
     */
    orderBy?: inspection_reviewOrderByWithRelationInput | inspection_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inspection_reviews.
     */
    cursor?: inspection_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspection_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspection_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inspection_reviews.
     */
    distinct?: Inspection_reviewScalarFieldEnum | Inspection_reviewScalarFieldEnum[]
  }

  /**
   * inspection_review findFirstOrThrow
   */
  export type inspection_reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * Filter, which inspection_review to fetch.
     */
    where?: inspection_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspection_reviews to fetch.
     */
    orderBy?: inspection_reviewOrderByWithRelationInput | inspection_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inspection_reviews.
     */
    cursor?: inspection_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspection_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspection_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inspection_reviews.
     */
    distinct?: Inspection_reviewScalarFieldEnum | Inspection_reviewScalarFieldEnum[]
  }

  /**
   * inspection_review findMany
   */
  export type inspection_reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * Filter, which inspection_reviews to fetch.
     */
    where?: inspection_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspection_reviews to fetch.
     */
    orderBy?: inspection_reviewOrderByWithRelationInput | inspection_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inspection_reviews.
     */
    cursor?: inspection_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspection_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspection_reviews.
     */
    skip?: number
    distinct?: Inspection_reviewScalarFieldEnum | Inspection_reviewScalarFieldEnum[]
  }

  /**
   * inspection_review create
   */
  export type inspection_reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a inspection_review.
     */
    data: XOR<inspection_reviewCreateInput, inspection_reviewUncheckedCreateInput>
  }

  /**
   * inspection_review createMany
   */
  export type inspection_reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inspection_reviews.
     */
    data: inspection_reviewCreateManyInput | inspection_reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inspection_review update
   */
  export type inspection_reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a inspection_review.
     */
    data: XOR<inspection_reviewUpdateInput, inspection_reviewUncheckedUpdateInput>
    /**
     * Choose, which inspection_review to update.
     */
    where: inspection_reviewWhereUniqueInput
  }

  /**
   * inspection_review updateMany
   */
  export type inspection_reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inspection_reviews.
     */
    data: XOR<inspection_reviewUpdateManyMutationInput, inspection_reviewUncheckedUpdateManyInput>
    /**
     * Filter which inspection_reviews to update
     */
    where?: inspection_reviewWhereInput
  }

  /**
   * inspection_review upsert
   */
  export type inspection_reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the inspection_review to update in case it exists.
     */
    where: inspection_reviewWhereUniqueInput
    /**
     * In case the inspection_review found by the `where` argument doesn't exist, create a new inspection_review with this data.
     */
    create: XOR<inspection_reviewCreateInput, inspection_reviewUncheckedCreateInput>
    /**
     * In case the inspection_review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inspection_reviewUpdateInput, inspection_reviewUncheckedUpdateInput>
  }

  /**
   * inspection_review delete
   */
  export type inspection_reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    /**
     * Filter which inspection_review to delete.
     */
    where: inspection_reviewWhereUniqueInput
  }

  /**
   * inspection_review deleteMany
   */
  export type inspection_reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inspection_reviews to delete
     */
    where?: inspection_reviewWhereInput
  }

  /**
   * inspection_review without action
   */
  export type inspection_reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
  }


  /**
   * Model inspector
   */

  export type AggregateInspector = {
    _count: InspectorCountAggregateOutputType | null
    _avg: InspectorAvgAggregateOutputType | null
    _sum: InspectorSumAggregateOutputType | null
    _min: InspectorMinAggregateOutputType | null
    _max: InspectorMaxAggregateOutputType | null
  }

  export type InspectorAvgAggregateOutputType = {
    id: number | null
  }

  export type InspectorSumAggregateOutputType = {
    id: number | null
  }

  export type InspectorMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    role: $Enums.Role | null
    lga: string | null
    profile_image: string | null
    password: string | null
    reset_password_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InspectorMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    role: $Enums.Role | null
    lga: string | null
    profile_image: string | null
    password: string | null
    reset_password_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InspectorCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    address: number
    role: number
    lga: number
    profile_image: number
    password: number
    reset_password_token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InspectorAvgAggregateInputType = {
    id?: true
  }

  export type InspectorSumAggregateInputType = {
    id?: true
  }

  export type InspectorMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    address?: true
    role?: true
    lga?: true
    profile_image?: true
    password?: true
    reset_password_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InspectorMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    address?: true
    role?: true
    lga?: true
    profile_image?: true
    password?: true
    reset_password_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InspectorCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    address?: true
    role?: true
    lga?: true
    profile_image?: true
    password?: true
    reset_password_token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InspectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inspector to aggregate.
     */
    where?: inspectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspectors to fetch.
     */
    orderBy?: inspectorOrderByWithRelationInput | inspectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inspectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inspectors
    **/
    _count?: true | InspectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InspectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InspectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspectorMaxAggregateInputType
  }

  export type GetInspectorAggregateType<T extends InspectorAggregateArgs> = {
        [P in keyof T & keyof AggregateInspector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspector[P]>
      : GetScalarType<T[P], AggregateInspector[P]>
  }




  export type inspectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inspectorWhereInput
    orderBy?: inspectorOrderByWithAggregationInput | inspectorOrderByWithAggregationInput[]
    by: InspectorScalarFieldEnum[] | InspectorScalarFieldEnum
    having?: inspectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspectorCountAggregateInputType | true
    _avg?: InspectorAvgAggregateInputType
    _sum?: InspectorSumAggregateInputType
    _min?: InspectorMinAggregateInputType
    _max?: InspectorMaxAggregateInputType
  }

  export type InspectorGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    address: string
    role: $Enums.Role
    lga: string | null
    profile_image: string
    password: string
    reset_password_token: string | null
    createdAt: Date
    updatedAt: Date
    _count: InspectorCountAggregateOutputType | null
    _avg: InspectorAvgAggregateOutputType | null
    _sum: InspectorSumAggregateOutputType | null
    _min: InspectorMinAggregateOutputType | null
    _max: InspectorMaxAggregateOutputType | null
  }

  type GetInspectorGroupByPayload<T extends inspectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspectorGroupByOutputType[P]>
            : GetScalarType<T[P], InspectorGroupByOutputType[P]>
        }
      >
    >


  export type inspectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    role?: boolean
    lga?: boolean
    profile_image?: boolean
    password?: boolean
    reset_password_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | inspector$facilityArgs<ExtArgs>
    _count?: boolean | InspectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspector"]>

  export type inspectorSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    role?: boolean
    lga?: boolean
    profile_image?: boolean
    password?: boolean
    reset_password_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type inspectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | inspector$facilityArgs<ExtArgs>
    _count?: boolean | InspectorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $inspectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inspector"
    objects: {
      facility: Prisma.$facilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      address: string
      role: $Enums.Role
      lga: string | null
      profile_image: string
      password: string
      reset_password_token: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inspector"]>
    composites: {}
  }


  type inspectorGetPayload<S extends boolean | null | undefined | inspectorDefaultArgs> = $Result.GetResult<Prisma.$inspectorPayload, S>

  type inspectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inspectorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InspectorCountAggregateInputType | true
    }

  export interface inspectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inspector'], meta: { name: 'inspector' } }
    /**
     * Find zero or one Inspector that matches the filter.
     * @param {inspectorFindUniqueArgs} args - Arguments to find a Inspector
     * @example
     * // Get one Inspector
     * const inspector = await prisma.inspector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inspectorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inspectorFindUniqueArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inspector that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inspectorFindUniqueOrThrowArgs} args - Arguments to find a Inspector
     * @example
     * // Get one Inspector
     * const inspector = await prisma.inspector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inspectorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inspector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectorFindFirstArgs} args - Arguments to find a Inspector
     * @example
     * // Get one Inspector
     * const inspector = await prisma.inspector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inspectorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectorFindFirstArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inspector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectorFindFirstOrThrowArgs} args - Arguments to find a Inspector
     * @example
     * // Get one Inspector
     * const inspector = await prisma.inspector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inspectorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inspectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inspectors
     * const inspectors = await prisma.inspector.findMany()
     * 
     * // Get first 10 Inspectors
     * const inspectors = await prisma.inspector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspectorWithIdOnly = await prisma.inspector.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends inspectorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inspector.
     * @param {inspectorCreateArgs} args - Arguments to create a Inspector.
     * @example
     * // Create one Inspector
     * const Inspector = await prisma.inspector.create({
     *   data: {
     *     // ... data to create a Inspector
     *   }
     * })
     * 
    **/
    create<T extends inspectorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inspectorCreateArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inspectors.
     *     @param {inspectorCreateManyArgs} args - Arguments to create many Inspectors.
     *     @example
     *     // Create many Inspectors
     *     const inspector = await prisma.inspector.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends inspectorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inspector.
     * @param {inspectorDeleteArgs} args - Arguments to delete one Inspector.
     * @example
     * // Delete one Inspector
     * const Inspector = await prisma.inspector.delete({
     *   where: {
     *     // ... filter to delete one Inspector
     *   }
     * })
     * 
    **/
    delete<T extends inspectorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inspectorDeleteArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inspector.
     * @param {inspectorUpdateArgs} args - Arguments to update one Inspector.
     * @example
     * // Update one Inspector
     * const inspector = await prisma.inspector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inspectorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inspectorUpdateArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inspectors.
     * @param {inspectorDeleteManyArgs} args - Arguments to filter Inspectors to delete.
     * @example
     * // Delete a few Inspectors
     * const { count } = await prisma.inspector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inspectorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inspectorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inspectors
     * const inspector = await prisma.inspector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inspectorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inspectorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inspector.
     * @param {inspectorUpsertArgs} args - Arguments to update or create a Inspector.
     * @example
     * // Update or create a Inspector
     * const inspector = await prisma.inspector.upsert({
     *   create: {
     *     // ... data to create a Inspector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inspector we want to update
     *   }
     * })
    **/
    upsert<T extends inspectorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inspectorUpsertArgs<ExtArgs>>
    ): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inspectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectorCountArgs} args - Arguments to filter Inspectors to count.
     * @example
     * // Count the number of Inspectors
     * const count = await prisma.inspector.count({
     *   where: {
     *     // ... the filter for the Inspectors we want to count
     *   }
     * })
    **/
    count<T extends inspectorCountArgs>(
      args?: Subset<T, inspectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inspector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InspectorAggregateArgs>(args: Subset<T, InspectorAggregateArgs>): Prisma.PrismaPromise<GetInspectorAggregateType<T>>

    /**
     * Group by Inspector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inspectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inspectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inspectorGroupByArgs['orderBy'] }
        : { orderBy?: inspectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inspectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inspector model
   */
  readonly fields: inspectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inspector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inspectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    facility<T extends inspector$facilityArgs<ExtArgs> = {}>(args?: Subset<T, inspector$facilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the inspector model
   */ 
  interface inspectorFieldRefs {
    readonly id: FieldRef<"inspector", 'Int'>
    readonly fullname: FieldRef<"inspector", 'String'>
    readonly username: FieldRef<"inspector", 'String'>
    readonly email: FieldRef<"inspector", 'String'>
    readonly phone_number: FieldRef<"inspector", 'String'>
    readonly address: FieldRef<"inspector", 'String'>
    readonly role: FieldRef<"inspector", 'Role'>
    readonly lga: FieldRef<"inspector", 'String'>
    readonly profile_image: FieldRef<"inspector", 'String'>
    readonly password: FieldRef<"inspector", 'String'>
    readonly reset_password_token: FieldRef<"inspector", 'String'>
    readonly createdAt: FieldRef<"inspector", 'DateTime'>
    readonly updatedAt: FieldRef<"inspector", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inspector findUnique
   */
  export type inspectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * Filter, which inspector to fetch.
     */
    where: inspectorWhereUniqueInput
  }

  /**
   * inspector findUniqueOrThrow
   */
  export type inspectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * Filter, which inspector to fetch.
     */
    where: inspectorWhereUniqueInput
  }

  /**
   * inspector findFirst
   */
  export type inspectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * Filter, which inspector to fetch.
     */
    where?: inspectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspectors to fetch.
     */
    orderBy?: inspectorOrderByWithRelationInput | inspectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inspectors.
     */
    cursor?: inspectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inspectors.
     */
    distinct?: InspectorScalarFieldEnum | InspectorScalarFieldEnum[]
  }

  /**
   * inspector findFirstOrThrow
   */
  export type inspectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * Filter, which inspector to fetch.
     */
    where?: inspectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspectors to fetch.
     */
    orderBy?: inspectorOrderByWithRelationInput | inspectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inspectors.
     */
    cursor?: inspectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inspectors.
     */
    distinct?: InspectorScalarFieldEnum | InspectorScalarFieldEnum[]
  }

  /**
   * inspector findMany
   */
  export type inspectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * Filter, which inspectors to fetch.
     */
    where?: inspectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inspectors to fetch.
     */
    orderBy?: inspectorOrderByWithRelationInput | inspectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inspectors.
     */
    cursor?: inspectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inspectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inspectors.
     */
    skip?: number
    distinct?: InspectorScalarFieldEnum | InspectorScalarFieldEnum[]
  }

  /**
   * inspector create
   */
  export type inspectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * The data needed to create a inspector.
     */
    data: XOR<inspectorCreateInput, inspectorUncheckedCreateInput>
  }

  /**
   * inspector createMany
   */
  export type inspectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inspectors.
     */
    data: inspectorCreateManyInput | inspectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inspector update
   */
  export type inspectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * The data needed to update a inspector.
     */
    data: XOR<inspectorUpdateInput, inspectorUncheckedUpdateInput>
    /**
     * Choose, which inspector to update.
     */
    where: inspectorWhereUniqueInput
  }

  /**
   * inspector updateMany
   */
  export type inspectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inspectors.
     */
    data: XOR<inspectorUpdateManyMutationInput, inspectorUncheckedUpdateManyInput>
    /**
     * Filter which inspectors to update
     */
    where?: inspectorWhereInput
  }

  /**
   * inspector upsert
   */
  export type inspectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * The filter to search for the inspector to update in case it exists.
     */
    where: inspectorWhereUniqueInput
    /**
     * In case the inspector found by the `where` argument doesn't exist, create a new inspector with this data.
     */
    create: XOR<inspectorCreateInput, inspectorUncheckedCreateInput>
    /**
     * In case the inspector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inspectorUpdateInput, inspectorUncheckedUpdateInput>
  }

  /**
   * inspector delete
   */
  export type inspectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    /**
     * Filter which inspector to delete.
     */
    where: inspectorWhereUniqueInput
  }

  /**
   * inspector deleteMany
   */
  export type inspectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inspectors to delete
     */
    where?: inspectorWhereInput
  }

  /**
   * inspector.facility
   */
  export type inspector$facilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    where?: facilityWhereInput
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    cursor?: facilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * inspector without action
   */
  export type inspectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
  }


  /**
   * Model state
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which state to aggregate.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned states
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type stateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stateWhereInput
    orderBy?: stateOrderByWithAggregationInput | stateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: stateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends stateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type stateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    local_government?: boolean | state$local_governmentArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type stateSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type stateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    local_government?: boolean | state$local_governmentArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $statePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "state"
    objects: {
      local_government: Prisma.$local_governmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["state"]>
    composites: {}
  }


  type stateGetPayload<S extends boolean | null | undefined | stateDefaultArgs> = $Result.GetResult<Prisma.$statePayload, S>

  type stateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<stateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface stateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['state'], meta: { name: 'state' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {stateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends stateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, stateFindUniqueArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one State that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {stateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends stateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends stateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindFirstArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends stateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends stateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a State.
     * @param {stateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
    **/
    create<T extends stateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, stateCreateArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many States.
     *     @param {stateCreateManyArgs} args - Arguments to create many States.
     *     @example
     *     // Create many States
     *     const state = await prisma.state.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends stateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {stateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
    **/
    delete<T extends stateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, stateDeleteArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one State.
     * @param {stateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends stateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, stateUpdateArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more States.
     * @param {stateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends stateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends stateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, stateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {stateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
    **/
    upsert<T extends stateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, stateUpsertArgs<ExtArgs>>
    ): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends stateCountArgs>(
      args?: Subset<T, stateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stateGroupByArgs['orderBy'] }
        : { orderBy?: stateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the state model
   */
  readonly fields: stateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for state.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    local_government<T extends state$local_governmentArgs<ExtArgs> = {}>(args?: Subset<T, state$local_governmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the state model
   */ 
  interface stateFieldRefs {
    readonly id: FieldRef<"state", 'Int'>
    readonly name: FieldRef<"state", 'String'>
    readonly createdAt: FieldRef<"state", 'DateTime'>
    readonly updatedAt: FieldRef<"state", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * state findUnique
   */
  export type stateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where: stateWhereUniqueInput
  }

  /**
   * state findUniqueOrThrow
   */
  export type stateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where: stateWhereUniqueInput
  }

  /**
   * state findFirst
   */
  export type stateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * state findFirstOrThrow
   */
  export type stateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which state to fetch.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * state findMany
   */
  export type stateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter, which states to fetch.
     */
    where?: stateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
     */
    orderBy?: stateOrderByWithRelationInput | stateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing states.
     */
    cursor?: stateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * state create
   */
  export type stateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * The data needed to create a state.
     */
    data: XOR<stateCreateInput, stateUncheckedCreateInput>
  }

  /**
   * state createMany
   */
  export type stateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many states.
     */
    data: stateCreateManyInput | stateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * state update
   */
  export type stateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * The data needed to update a state.
     */
    data: XOR<stateUpdateInput, stateUncheckedUpdateInput>
    /**
     * Choose, which state to update.
     */
    where: stateWhereUniqueInput
  }

  /**
   * state updateMany
   */
  export type stateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update states.
     */
    data: XOR<stateUpdateManyMutationInput, stateUncheckedUpdateManyInput>
    /**
     * Filter which states to update
     */
    where?: stateWhereInput
  }

  /**
   * state upsert
   */
  export type stateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * The filter to search for the state to update in case it exists.
     */
    where: stateWhereUniqueInput
    /**
     * In case the state found by the `where` argument doesn't exist, create a new state with this data.
     */
    create: XOR<stateCreateInput, stateUncheckedCreateInput>
    /**
     * In case the state was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stateUpdateInput, stateUncheckedUpdateInput>
  }

  /**
   * state delete
   */
  export type stateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
    /**
     * Filter which state to delete.
     */
    where: stateWhereUniqueInput
  }

  /**
   * state deleteMany
   */
  export type stateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which states to delete
     */
    where?: stateWhereInput
  }

  /**
   * state.local_government
   */
  export type state$local_governmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    where?: local_governmentWhereInput
    orderBy?: local_governmentOrderByWithRelationInput | local_governmentOrderByWithRelationInput[]
    cursor?: local_governmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Local_governmentScalarFieldEnum | Local_governmentScalarFieldEnum[]
  }

  /**
   * state without action
   */
  export type stateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the state
     */
    select?: stateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateInclude<ExtArgs> | null
  }


  /**
   * Model local_government
   */

  export type AggregateLocal_government = {
    _count: Local_governmentCountAggregateOutputType | null
    _avg: Local_governmentAvgAggregateOutputType | null
    _sum: Local_governmentSumAggregateOutputType | null
    _min: Local_governmentMinAggregateOutputType | null
    _max: Local_governmentMaxAggregateOutputType | null
  }

  export type Local_governmentAvgAggregateOutputType = {
    id: number | null
    state_id: number | null
  }

  export type Local_governmentSumAggregateOutputType = {
    id: number | null
    state_id: number | null
  }

  export type Local_governmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    state_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Local_governmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    state_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Local_governmentCountAggregateOutputType = {
    id: number
    name: number
    state_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Local_governmentAvgAggregateInputType = {
    id?: true
    state_id?: true
  }

  export type Local_governmentSumAggregateInputType = {
    id?: true
    state_id?: true
  }

  export type Local_governmentMinAggregateInputType = {
    id?: true
    name?: true
    state_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Local_governmentMaxAggregateInputType = {
    id?: true
    name?: true
    state_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Local_governmentCountAggregateInputType = {
    id?: true
    name?: true
    state_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Local_governmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which local_government to aggregate.
     */
    where?: local_governmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of local_governments to fetch.
     */
    orderBy?: local_governmentOrderByWithRelationInput | local_governmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: local_governmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` local_governments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` local_governments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned local_governments
    **/
    _count?: true | Local_governmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Local_governmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Local_governmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Local_governmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Local_governmentMaxAggregateInputType
  }

  export type GetLocal_governmentAggregateType<T extends Local_governmentAggregateArgs> = {
        [P in keyof T & keyof AggregateLocal_government]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocal_government[P]>
      : GetScalarType<T[P], AggregateLocal_government[P]>
  }




  export type local_governmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: local_governmentWhereInput
    orderBy?: local_governmentOrderByWithAggregationInput | local_governmentOrderByWithAggregationInput[]
    by: Local_governmentScalarFieldEnum[] | Local_governmentScalarFieldEnum
    having?: local_governmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Local_governmentCountAggregateInputType | true
    _avg?: Local_governmentAvgAggregateInputType
    _sum?: Local_governmentSumAggregateInputType
    _min?: Local_governmentMinAggregateInputType
    _max?: Local_governmentMaxAggregateInputType
  }

  export type Local_governmentGroupByOutputType = {
    id: number
    name: string
    state_id: number
    createdAt: Date
    updatedAt: Date
    _count: Local_governmentCountAggregateOutputType | null
    _avg: Local_governmentAvgAggregateOutputType | null
    _sum: Local_governmentSumAggregateOutputType | null
    _min: Local_governmentMinAggregateOutputType | null
    _max: Local_governmentMaxAggregateOutputType | null
  }

  type GetLocal_governmentGroupByPayload<T extends local_governmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Local_governmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Local_governmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Local_governmentGroupByOutputType[P]>
            : GetScalarType<T[P], Local_governmentGroupByOutputType[P]>
        }
      >
    >


  export type local_governmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    state?: boolean | stateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["local_government"]>

  export type local_governmentSelectScalar = {
    id?: boolean
    name?: boolean
    state_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type local_governmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | stateDefaultArgs<ExtArgs>
  }


  export type $local_governmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "local_government"
    objects: {
      state: Prisma.$statePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      state_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["local_government"]>
    composites: {}
  }


  type local_governmentGetPayload<S extends boolean | null | undefined | local_governmentDefaultArgs> = $Result.GetResult<Prisma.$local_governmentPayload, S>

  type local_governmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<local_governmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Local_governmentCountAggregateInputType | true
    }

  export interface local_governmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['local_government'], meta: { name: 'local_government' } }
    /**
     * Find zero or one Local_government that matches the filter.
     * @param {local_governmentFindUniqueArgs} args - Arguments to find a Local_government
     * @example
     * // Get one Local_government
     * const local_government = await prisma.local_government.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends local_governmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, local_governmentFindUniqueArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Local_government that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {local_governmentFindUniqueOrThrowArgs} args - Arguments to find a Local_government
     * @example
     * // Get one Local_government
     * const local_government = await prisma.local_government.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends local_governmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, local_governmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Local_government that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {local_governmentFindFirstArgs} args - Arguments to find a Local_government
     * @example
     * // Get one Local_government
     * const local_government = await prisma.local_government.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends local_governmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, local_governmentFindFirstArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Local_government that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {local_governmentFindFirstOrThrowArgs} args - Arguments to find a Local_government
     * @example
     * // Get one Local_government
     * const local_government = await prisma.local_government.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends local_governmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, local_governmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Local_governments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {local_governmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Local_governments
     * const local_governments = await prisma.local_government.findMany()
     * 
     * // Get first 10 Local_governments
     * const local_governments = await prisma.local_government.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const local_governmentWithIdOnly = await prisma.local_government.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends local_governmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, local_governmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Local_government.
     * @param {local_governmentCreateArgs} args - Arguments to create a Local_government.
     * @example
     * // Create one Local_government
     * const Local_government = await prisma.local_government.create({
     *   data: {
     *     // ... data to create a Local_government
     *   }
     * })
     * 
    **/
    create<T extends local_governmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, local_governmentCreateArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Local_governments.
     *     @param {local_governmentCreateManyArgs} args - Arguments to create many Local_governments.
     *     @example
     *     // Create many Local_governments
     *     const local_government = await prisma.local_government.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends local_governmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, local_governmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Local_government.
     * @param {local_governmentDeleteArgs} args - Arguments to delete one Local_government.
     * @example
     * // Delete one Local_government
     * const Local_government = await prisma.local_government.delete({
     *   where: {
     *     // ... filter to delete one Local_government
     *   }
     * })
     * 
    **/
    delete<T extends local_governmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, local_governmentDeleteArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Local_government.
     * @param {local_governmentUpdateArgs} args - Arguments to update one Local_government.
     * @example
     * // Update one Local_government
     * const local_government = await prisma.local_government.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends local_governmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, local_governmentUpdateArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Local_governments.
     * @param {local_governmentDeleteManyArgs} args - Arguments to filter Local_governments to delete.
     * @example
     * // Delete a few Local_governments
     * const { count } = await prisma.local_government.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends local_governmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, local_governmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Local_governments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {local_governmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Local_governments
     * const local_government = await prisma.local_government.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends local_governmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, local_governmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Local_government.
     * @param {local_governmentUpsertArgs} args - Arguments to update or create a Local_government.
     * @example
     * // Update or create a Local_government
     * const local_government = await prisma.local_government.upsert({
     *   create: {
     *     // ... data to create a Local_government
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Local_government we want to update
     *   }
     * })
    **/
    upsert<T extends local_governmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, local_governmentUpsertArgs<ExtArgs>>
    ): Prisma__local_governmentClient<$Result.GetResult<Prisma.$local_governmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Local_governments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {local_governmentCountArgs} args - Arguments to filter Local_governments to count.
     * @example
     * // Count the number of Local_governments
     * const count = await prisma.local_government.count({
     *   where: {
     *     // ... the filter for the Local_governments we want to count
     *   }
     * })
    **/
    count<T extends local_governmentCountArgs>(
      args?: Subset<T, local_governmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Local_governmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Local_government.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Local_governmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Local_governmentAggregateArgs>(args: Subset<T, Local_governmentAggregateArgs>): Prisma.PrismaPromise<GetLocal_governmentAggregateType<T>>

    /**
     * Group by Local_government.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {local_governmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends local_governmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: local_governmentGroupByArgs['orderBy'] }
        : { orderBy?: local_governmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, local_governmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocal_governmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the local_government model
   */
  readonly fields: local_governmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for local_government.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__local_governmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    state<T extends stateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stateDefaultArgs<ExtArgs>>): Prisma__stateClient<$Result.GetResult<Prisma.$statePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the local_government model
   */ 
  interface local_governmentFieldRefs {
    readonly id: FieldRef<"local_government", 'Int'>
    readonly name: FieldRef<"local_government", 'String'>
    readonly state_id: FieldRef<"local_government", 'Int'>
    readonly createdAt: FieldRef<"local_government", 'DateTime'>
    readonly updatedAt: FieldRef<"local_government", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * local_government findUnique
   */
  export type local_governmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * Filter, which local_government to fetch.
     */
    where: local_governmentWhereUniqueInput
  }

  /**
   * local_government findUniqueOrThrow
   */
  export type local_governmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * Filter, which local_government to fetch.
     */
    where: local_governmentWhereUniqueInput
  }

  /**
   * local_government findFirst
   */
  export type local_governmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * Filter, which local_government to fetch.
     */
    where?: local_governmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of local_governments to fetch.
     */
    orderBy?: local_governmentOrderByWithRelationInput | local_governmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for local_governments.
     */
    cursor?: local_governmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` local_governments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` local_governments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of local_governments.
     */
    distinct?: Local_governmentScalarFieldEnum | Local_governmentScalarFieldEnum[]
  }

  /**
   * local_government findFirstOrThrow
   */
  export type local_governmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * Filter, which local_government to fetch.
     */
    where?: local_governmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of local_governments to fetch.
     */
    orderBy?: local_governmentOrderByWithRelationInput | local_governmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for local_governments.
     */
    cursor?: local_governmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` local_governments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` local_governments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of local_governments.
     */
    distinct?: Local_governmentScalarFieldEnum | Local_governmentScalarFieldEnum[]
  }

  /**
   * local_government findMany
   */
  export type local_governmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * Filter, which local_governments to fetch.
     */
    where?: local_governmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of local_governments to fetch.
     */
    orderBy?: local_governmentOrderByWithRelationInput | local_governmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing local_governments.
     */
    cursor?: local_governmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` local_governments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` local_governments.
     */
    skip?: number
    distinct?: Local_governmentScalarFieldEnum | Local_governmentScalarFieldEnum[]
  }

  /**
   * local_government create
   */
  export type local_governmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * The data needed to create a local_government.
     */
    data: XOR<local_governmentCreateInput, local_governmentUncheckedCreateInput>
  }

  /**
   * local_government createMany
   */
  export type local_governmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many local_governments.
     */
    data: local_governmentCreateManyInput | local_governmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * local_government update
   */
  export type local_governmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * The data needed to update a local_government.
     */
    data: XOR<local_governmentUpdateInput, local_governmentUncheckedUpdateInput>
    /**
     * Choose, which local_government to update.
     */
    where: local_governmentWhereUniqueInput
  }

  /**
   * local_government updateMany
   */
  export type local_governmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update local_governments.
     */
    data: XOR<local_governmentUpdateManyMutationInput, local_governmentUncheckedUpdateManyInput>
    /**
     * Filter which local_governments to update
     */
    where?: local_governmentWhereInput
  }

  /**
   * local_government upsert
   */
  export type local_governmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * The filter to search for the local_government to update in case it exists.
     */
    where: local_governmentWhereUniqueInput
    /**
     * In case the local_government found by the `where` argument doesn't exist, create a new local_government with this data.
     */
    create: XOR<local_governmentCreateInput, local_governmentUncheckedCreateInput>
    /**
     * In case the local_government was found with the provided `where` argument, update it with this data.
     */
    update: XOR<local_governmentUpdateInput, local_governmentUncheckedUpdateInput>
  }

  /**
   * local_government delete
   */
  export type local_governmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
    /**
     * Filter which local_government to delete.
     */
    where: local_governmentWhereUniqueInput
  }

  /**
   * local_government deleteMany
   */
  export type local_governmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which local_governments to delete
     */
    where?: local_governmentWhereInput
  }

  /**
   * local_government without action
   */
  export type local_governmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the local_government
     */
    select?: local_governmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: local_governmentInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    type: $Enums.Type | null
    practice_id: string | null
    practice_certificate: string | null
    enugu_practice_id: string | null
    specialization: string | null
    nin: string | null
    nin_image: string | null
    lga: string | null
    state: string | null
    gender: string | null
    expiry_date: string | null
    nin_status: $Enums.Status | null
    practice_id_status: $Enums.Status | null
    status: $Enums.Status | null
    passport: string | null
    password: string | null
    reset_password_token: string | null
    certificate_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    type: $Enums.Type | null
    practice_id: string | null
    practice_certificate: string | null
    enugu_practice_id: string | null
    specialization: string | null
    nin: string | null
    nin_image: string | null
    lga: string | null
    state: string | null
    gender: string | null
    expiry_date: string | null
    nin_status: $Enums.Status | null
    practice_id_status: $Enums.Status | null
    status: $Enums.Status | null
    passport: string | null
    password: string | null
    reset_password_token: string | null
    certificate_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    phone_number: number
    address: number
    type: number
    practice_id: number
    practice_certificate: number
    enugu_practice_id: number
    specialization: number
    nin: number
    nin_image: number
    lga: number
    state: number
    gender: number
    expiry_date: number
    nin_status: number
    practice_id_status: number
    status: number
    passport: number
    password: number
    reset_password_token: number
    certificate_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    type?: true
    practice_id?: true
    practice_certificate?: true
    enugu_practice_id?: true
    specialization?: true
    nin?: true
    nin_image?: true
    lga?: true
    state?: true
    gender?: true
    expiry_date?: true
    nin_status?: true
    practice_id_status?: true
    status?: true
    passport?: true
    password?: true
    reset_password_token?: true
    certificate_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    type?: true
    practice_id?: true
    practice_certificate?: true
    enugu_practice_id?: true
    specialization?: true
    nin?: true
    nin_image?: true
    lga?: true
    state?: true
    gender?: true
    expiry_date?: true
    nin_status?: true
    practice_id_status?: true
    status?: true
    passport?: true
    password?: true
    reset_password_token?: true
    certificate_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    type?: true
    practice_id?: true
    practice_certificate?: true
    enugu_practice_id?: true
    specialization?: true
    nin?: true
    nin_image?: true
    lga?: true
    state?: true
    gender?: true
    expiry_date?: true
    nin_status?: true
    practice_id_status?: true
    status?: true
    passport?: true
    password?: true
    reset_password_token?: true
    certificate_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    fullname: string
    email: string
    phone_number: string
    address: string
    type: $Enums.Type
    practice_id: string
    practice_certificate: string | null
    enugu_practice_id: string
    specialization: string | null
    nin: string
    nin_image: string | null
    lga: string | null
    state: string | null
    gender: string | null
    expiry_date: string
    nin_status: $Enums.Status
    practice_id_status: $Enums.Status
    status: $Enums.Status
    passport: string | null
    password: string | null
    reset_password_token: string | null
    certificate_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    type?: boolean
    practice_id?: boolean
    practice_certificate?: boolean
    enugu_practice_id?: boolean
    specialization?: boolean
    nin?: boolean
    nin_image?: boolean
    lga?: boolean
    state?: boolean
    gender?: boolean
    expiry_date?: boolean
    nin_status?: boolean
    practice_id_status?: boolean
    status?: boolean
    passport?: boolean
    password?: boolean
    reset_password_token?: boolean
    certificate_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility_personnel?: boolean | users$facility_personnelArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    type?: boolean
    practice_id?: boolean
    practice_certificate?: boolean
    enugu_practice_id?: boolean
    specialization?: boolean
    nin?: boolean
    nin_image?: boolean
    lga?: boolean
    state?: boolean
    gender?: boolean
    expiry_date?: boolean
    nin_status?: boolean
    practice_id_status?: boolean
    status?: boolean
    passport?: boolean
    password?: boolean
    reset_password_token?: boolean
    certificate_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_personnel?: boolean | users$facility_personnelArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      facility_personnel: Prisma.$facility_personnelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      phone_number: string
      address: string
      type: $Enums.Type
      practice_id: string
      practice_certificate: string | null
      enugu_practice_id: string
      specialization: string | null
      nin: string
      nin_image: string | null
      lga: string | null
      state: string | null
      gender: string | null
      expiry_date: string
      nin_status: $Enums.Status
      practice_id_status: $Enums.Status
      status: $Enums.Status
      passport: string | null
      password: string | null
      reset_password_token: string | null
      certificate_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    facility_personnel<T extends users$facility_personnelArgs<ExtArgs> = {}>(args?: Subset<T, users$facility_personnelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly fullname: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly type: FieldRef<"users", 'Type'>
    readonly practice_id: FieldRef<"users", 'String'>
    readonly practice_certificate: FieldRef<"users", 'String'>
    readonly enugu_practice_id: FieldRef<"users", 'String'>
    readonly specialization: FieldRef<"users", 'String'>
    readonly nin: FieldRef<"users", 'String'>
    readonly nin_image: FieldRef<"users", 'String'>
    readonly lga: FieldRef<"users", 'String'>
    readonly state: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'String'>
    readonly expiry_date: FieldRef<"users", 'String'>
    readonly nin_status: FieldRef<"users", 'Status'>
    readonly practice_id_status: FieldRef<"users", 'Status'>
    readonly status: FieldRef<"users", 'Status'>
    readonly passport: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly reset_password_token: FieldRef<"users", 'String'>
    readonly certificate_url: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.facility_personnel
   */
  export type users$facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    where?: facility_personnelWhereInput
    orderBy?: facility_personnelOrderByWithRelationInput | facility_personnelOrderByWithRelationInput[]
    cursor?: facility_personnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facility_personnelScalarFieldEnum | Facility_personnelScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model food_handlers
   */

  export type AggregateFood_handlers = {
    _count: Food_handlersCountAggregateOutputType | null
    _avg: Food_handlersAvgAggregateOutputType | null
    _sum: Food_handlersSumAggregateOutputType | null
    _min: Food_handlersMinAggregateOutputType | null
    _max: Food_handlersMaxAggregateOutputType | null
  }

  export type Food_handlersAvgAggregateOutputType = {
    id: number | null
  }

  export type Food_handlersSumAggregateOutputType = {
    id: number | null
  }

  export type Food_handlersMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    enugu_handler_id: string | null
    nin: string | null
    nin_image: string | null
    lga: string | null
    state: string | null
    gender: string | null
    expiry_date: string | null
    nin_status: $Enums.Status | null
    status: $Enums.Status | null
    passport: string | null
    password: string | null
    reset_password_token: string | null
    certificate_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_handlersMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    enugu_handler_id: string | null
    nin: string | null
    nin_image: string | null
    lga: string | null
    state: string | null
    gender: string | null
    expiry_date: string | null
    nin_status: $Enums.Status | null
    status: $Enums.Status | null
    passport: string | null
    password: string | null
    reset_password_token: string | null
    certificate_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_handlersCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    phone_number: number
    address: number
    enugu_handler_id: number
    nin: number
    nin_image: number
    lga: number
    state: number
    gender: number
    expiry_date: number
    nin_status: number
    status: number
    passport: number
    password: number
    reset_password_token: number
    certificate_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Food_handlersAvgAggregateInputType = {
    id?: true
  }

  export type Food_handlersSumAggregateInputType = {
    id?: true
  }

  export type Food_handlersMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    enugu_handler_id?: true
    nin?: true
    nin_image?: true
    lga?: true
    state?: true
    gender?: true
    expiry_date?: true
    nin_status?: true
    status?: true
    passport?: true
    password?: true
    reset_password_token?: true
    certificate_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_handlersMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    enugu_handler_id?: true
    nin?: true
    nin_image?: true
    lga?: true
    state?: true
    gender?: true
    expiry_date?: true
    nin_status?: true
    status?: true
    passport?: true
    password?: true
    reset_password_token?: true
    certificate_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_handlersCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    enugu_handler_id?: true
    nin?: true
    nin_image?: true
    lga?: true
    state?: true
    gender?: true
    expiry_date?: true
    nin_status?: true
    status?: true
    passport?: true
    password?: true
    reset_password_token?: true
    certificate_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Food_handlersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_handlers to aggregate.
     */
    where?: food_handlersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_handlers to fetch.
     */
    orderBy?: food_handlersOrderByWithRelationInput | food_handlersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: food_handlersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_handlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_handlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned food_handlers
    **/
    _count?: true | Food_handlersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Food_handlersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Food_handlersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_handlersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_handlersMaxAggregateInputType
  }

  export type GetFood_handlersAggregateType<T extends Food_handlersAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_handlers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_handlers[P]>
      : GetScalarType<T[P], AggregateFood_handlers[P]>
  }




  export type food_handlersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_handlersWhereInput
    orderBy?: food_handlersOrderByWithAggregationInput | food_handlersOrderByWithAggregationInput[]
    by: Food_handlersScalarFieldEnum[] | Food_handlersScalarFieldEnum
    having?: food_handlersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_handlersCountAggregateInputType | true
    _avg?: Food_handlersAvgAggregateInputType
    _sum?: Food_handlersSumAggregateInputType
    _min?: Food_handlersMinAggregateInputType
    _max?: Food_handlersMaxAggregateInputType
  }

  export type Food_handlersGroupByOutputType = {
    id: number
    fullname: string
    email: string
    phone_number: string
    address: string
    enugu_handler_id: string
    nin: string
    nin_image: string | null
    lga: string | null
    state: string | null
    gender: string | null
    expiry_date: string
    nin_status: $Enums.Status
    status: $Enums.Status
    passport: string | null
    password: string | null
    reset_password_token: string | null
    certificate_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: Food_handlersCountAggregateOutputType | null
    _avg: Food_handlersAvgAggregateOutputType | null
    _sum: Food_handlersSumAggregateOutputType | null
    _min: Food_handlersMinAggregateOutputType | null
    _max: Food_handlersMaxAggregateOutputType | null
  }

  type GetFood_handlersGroupByPayload<T extends food_handlersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_handlersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_handlersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_handlersGroupByOutputType[P]>
            : GetScalarType<T[P], Food_handlersGroupByOutputType[P]>
        }
      >
    >


  export type food_handlersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    enugu_handler_id?: boolean
    nin?: boolean
    nin_image?: boolean
    lga?: boolean
    state?: boolean
    gender?: boolean
    expiry_date?: boolean
    nin_status?: boolean
    status?: boolean
    passport?: boolean
    password?: boolean
    reset_password_token?: boolean
    certificate_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food_facility_personnel?: boolean | food_handlers$food_facility_personnelArgs<ExtArgs>
    _count?: boolean | Food_handlersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food_handlers"]>

  export type food_handlersSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    enugu_handler_id?: boolean
    nin?: boolean
    nin_image?: boolean
    lga?: boolean
    state?: boolean
    gender?: boolean
    expiry_date?: boolean
    nin_status?: boolean
    status?: boolean
    passport?: boolean
    password?: boolean
    reset_password_token?: boolean
    certificate_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type food_handlersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_facility_personnel?: boolean | food_handlers$food_facility_personnelArgs<ExtArgs>
    _count?: boolean | Food_handlersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $food_handlersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food_handlers"
    objects: {
      food_facility_personnel: Prisma.$food_facility_personnelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      phone_number: string
      address: string
      enugu_handler_id: string
      nin: string
      nin_image: string | null
      lga: string | null
      state: string | null
      gender: string | null
      expiry_date: string
      nin_status: $Enums.Status
      status: $Enums.Status
      passport: string | null
      password: string | null
      reset_password_token: string | null
      certificate_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food_handlers"]>
    composites: {}
  }


  type food_handlersGetPayload<S extends boolean | null | undefined | food_handlersDefaultArgs> = $Result.GetResult<Prisma.$food_handlersPayload, S>

  type food_handlersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<food_handlersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Food_handlersCountAggregateInputType | true
    }

  export interface food_handlersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food_handlers'], meta: { name: 'food_handlers' } }
    /**
     * Find zero or one Food_handlers that matches the filter.
     * @param {food_handlersFindUniqueArgs} args - Arguments to find a Food_handlers
     * @example
     * // Get one Food_handlers
     * const food_handlers = await prisma.food_handlers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends food_handlersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, food_handlersFindUniqueArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Food_handlers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {food_handlersFindUniqueOrThrowArgs} args - Arguments to find a Food_handlers
     * @example
     * // Get one Food_handlers
     * const food_handlers = await prisma.food_handlers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends food_handlersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, food_handlersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Food_handlers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_handlersFindFirstArgs} args - Arguments to find a Food_handlers
     * @example
     * // Get one Food_handlers
     * const food_handlers = await prisma.food_handlers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends food_handlersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, food_handlersFindFirstArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Food_handlers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_handlersFindFirstOrThrowArgs} args - Arguments to find a Food_handlers
     * @example
     * // Get one Food_handlers
     * const food_handlers = await prisma.food_handlers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends food_handlersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, food_handlersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Food_handlers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_handlersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_handlers
     * const food_handlers = await prisma.food_handlers.findMany()
     * 
     * // Get first 10 Food_handlers
     * const food_handlers = await prisma.food_handlers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const food_handlersWithIdOnly = await prisma.food_handlers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends food_handlersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_handlersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Food_handlers.
     * @param {food_handlersCreateArgs} args - Arguments to create a Food_handlers.
     * @example
     * // Create one Food_handlers
     * const Food_handlers = await prisma.food_handlers.create({
     *   data: {
     *     // ... data to create a Food_handlers
     *   }
     * })
     * 
    **/
    create<T extends food_handlersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, food_handlersCreateArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Food_handlers.
     *     @param {food_handlersCreateManyArgs} args - Arguments to create many Food_handlers.
     *     @example
     *     // Create many Food_handlers
     *     const food_handlers = await prisma.food_handlers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends food_handlersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_handlersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food_handlers.
     * @param {food_handlersDeleteArgs} args - Arguments to delete one Food_handlers.
     * @example
     * // Delete one Food_handlers
     * const Food_handlers = await prisma.food_handlers.delete({
     *   where: {
     *     // ... filter to delete one Food_handlers
     *   }
     * })
     * 
    **/
    delete<T extends food_handlersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, food_handlersDeleteArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Food_handlers.
     * @param {food_handlersUpdateArgs} args - Arguments to update one Food_handlers.
     * @example
     * // Update one Food_handlers
     * const food_handlers = await prisma.food_handlers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends food_handlersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, food_handlersUpdateArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Food_handlers.
     * @param {food_handlersDeleteManyArgs} args - Arguments to filter Food_handlers to delete.
     * @example
     * // Delete a few Food_handlers
     * const { count } = await prisma.food_handlers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends food_handlersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_handlersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_handlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_handlersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_handlers
     * const food_handlers = await prisma.food_handlers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends food_handlersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, food_handlersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food_handlers.
     * @param {food_handlersUpsertArgs} args - Arguments to update or create a Food_handlers.
     * @example
     * // Update or create a Food_handlers
     * const food_handlers = await prisma.food_handlers.upsert({
     *   create: {
     *     // ... data to create a Food_handlers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_handlers we want to update
     *   }
     * })
    **/
    upsert<T extends food_handlersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, food_handlersUpsertArgs<ExtArgs>>
    ): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Food_handlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_handlersCountArgs} args - Arguments to filter Food_handlers to count.
     * @example
     * // Count the number of Food_handlers
     * const count = await prisma.food_handlers.count({
     *   where: {
     *     // ... the filter for the Food_handlers we want to count
     *   }
     * })
    **/
    count<T extends food_handlersCountArgs>(
      args?: Subset<T, food_handlersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_handlersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_handlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_handlersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Food_handlersAggregateArgs>(args: Subset<T, Food_handlersAggregateArgs>): Prisma.PrismaPromise<GetFood_handlersAggregateType<T>>

    /**
     * Group by Food_handlers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_handlersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends food_handlersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: food_handlersGroupByArgs['orderBy'] }
        : { orderBy?: food_handlersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, food_handlersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_handlersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food_handlers model
   */
  readonly fields: food_handlersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food_handlers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__food_handlersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    food_facility_personnel<T extends food_handlers$food_facility_personnelArgs<ExtArgs> = {}>(args?: Subset<T, food_handlers$food_facility_personnelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the food_handlers model
   */ 
  interface food_handlersFieldRefs {
    readonly id: FieldRef<"food_handlers", 'Int'>
    readonly fullname: FieldRef<"food_handlers", 'String'>
    readonly email: FieldRef<"food_handlers", 'String'>
    readonly phone_number: FieldRef<"food_handlers", 'String'>
    readonly address: FieldRef<"food_handlers", 'String'>
    readonly enugu_handler_id: FieldRef<"food_handlers", 'String'>
    readonly nin: FieldRef<"food_handlers", 'String'>
    readonly nin_image: FieldRef<"food_handlers", 'String'>
    readonly lga: FieldRef<"food_handlers", 'String'>
    readonly state: FieldRef<"food_handlers", 'String'>
    readonly gender: FieldRef<"food_handlers", 'String'>
    readonly expiry_date: FieldRef<"food_handlers", 'String'>
    readonly nin_status: FieldRef<"food_handlers", 'Status'>
    readonly status: FieldRef<"food_handlers", 'Status'>
    readonly passport: FieldRef<"food_handlers", 'String'>
    readonly password: FieldRef<"food_handlers", 'String'>
    readonly reset_password_token: FieldRef<"food_handlers", 'String'>
    readonly certificate_url: FieldRef<"food_handlers", 'String'>
    readonly createdAt: FieldRef<"food_handlers", 'DateTime'>
    readonly updatedAt: FieldRef<"food_handlers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * food_handlers findUnique
   */
  export type food_handlersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * Filter, which food_handlers to fetch.
     */
    where: food_handlersWhereUniqueInput
  }

  /**
   * food_handlers findUniqueOrThrow
   */
  export type food_handlersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * Filter, which food_handlers to fetch.
     */
    where: food_handlersWhereUniqueInput
  }

  /**
   * food_handlers findFirst
   */
  export type food_handlersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * Filter, which food_handlers to fetch.
     */
    where?: food_handlersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_handlers to fetch.
     */
    orderBy?: food_handlersOrderByWithRelationInput | food_handlersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_handlers.
     */
    cursor?: food_handlersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_handlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_handlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_handlers.
     */
    distinct?: Food_handlersScalarFieldEnum | Food_handlersScalarFieldEnum[]
  }

  /**
   * food_handlers findFirstOrThrow
   */
  export type food_handlersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * Filter, which food_handlers to fetch.
     */
    where?: food_handlersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_handlers to fetch.
     */
    orderBy?: food_handlersOrderByWithRelationInput | food_handlersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_handlers.
     */
    cursor?: food_handlersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_handlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_handlers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_handlers.
     */
    distinct?: Food_handlersScalarFieldEnum | Food_handlersScalarFieldEnum[]
  }

  /**
   * food_handlers findMany
   */
  export type food_handlersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * Filter, which food_handlers to fetch.
     */
    where?: food_handlersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_handlers to fetch.
     */
    orderBy?: food_handlersOrderByWithRelationInput | food_handlersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing food_handlers.
     */
    cursor?: food_handlersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_handlers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_handlers.
     */
    skip?: number
    distinct?: Food_handlersScalarFieldEnum | Food_handlersScalarFieldEnum[]
  }

  /**
   * food_handlers create
   */
  export type food_handlersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * The data needed to create a food_handlers.
     */
    data: XOR<food_handlersCreateInput, food_handlersUncheckedCreateInput>
  }

  /**
   * food_handlers createMany
   */
  export type food_handlersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many food_handlers.
     */
    data: food_handlersCreateManyInput | food_handlersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food_handlers update
   */
  export type food_handlersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * The data needed to update a food_handlers.
     */
    data: XOR<food_handlersUpdateInput, food_handlersUncheckedUpdateInput>
    /**
     * Choose, which food_handlers to update.
     */
    where: food_handlersWhereUniqueInput
  }

  /**
   * food_handlers updateMany
   */
  export type food_handlersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update food_handlers.
     */
    data: XOR<food_handlersUpdateManyMutationInput, food_handlersUncheckedUpdateManyInput>
    /**
     * Filter which food_handlers to update
     */
    where?: food_handlersWhereInput
  }

  /**
   * food_handlers upsert
   */
  export type food_handlersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * The filter to search for the food_handlers to update in case it exists.
     */
    where: food_handlersWhereUniqueInput
    /**
     * In case the food_handlers found by the `where` argument doesn't exist, create a new food_handlers with this data.
     */
    create: XOR<food_handlersCreateInput, food_handlersUncheckedCreateInput>
    /**
     * In case the food_handlers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<food_handlersUpdateInput, food_handlersUncheckedUpdateInput>
  }

  /**
   * food_handlers delete
   */
  export type food_handlersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
    /**
     * Filter which food_handlers to delete.
     */
    where: food_handlersWhereUniqueInput
  }

  /**
   * food_handlers deleteMany
   */
  export type food_handlersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_handlers to delete
     */
    where?: food_handlersWhereInput
  }

  /**
   * food_handlers.food_facility_personnel
   */
  export type food_handlers$food_facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    where?: food_facility_personnelWhereInput
    orderBy?: food_facility_personnelOrderByWithRelationInput | food_facility_personnelOrderByWithRelationInput[]
    cursor?: food_facility_personnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Food_facility_personnelScalarFieldEnum | Food_facility_personnelScalarFieldEnum[]
  }

  /**
   * food_handlers without action
   */
  export type food_handlersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_handlers
     */
    select?: food_handlersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_handlersInclude<ExtArgs> | null
  }


  /**
   * Model personnel_payment
   */

  export type AggregatePersonnel_payment = {
    _count: Personnel_paymentCountAggregateOutputType | null
    _avg: Personnel_paymentAvgAggregateOutputType | null
    _sum: Personnel_paymentSumAggregateOutputType | null
    _min: Personnel_paymentMinAggregateOutputType | null
    _max: Personnel_paymentMaxAggregateOutputType | null
  }

  export type Personnel_paymentAvgAggregateOutputType = {
    id: number | null
  }

  export type Personnel_paymentSumAggregateOutputType = {
    id: number | null
  }

  export type Personnel_paymentMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    type: string | null
    type_of_payment: string | null
    status: string | null
    has_registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Personnel_paymentMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    type: string | null
    type_of_payment: string | null
    status: string | null
    has_registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Personnel_paymentCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    amount: number
    reference: number
    phone_number: number
    type: number
    type_of_payment: number
    status: number
    has_registered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Personnel_paymentAvgAggregateInputType = {
    id?: true
  }

  export type Personnel_paymentSumAggregateInputType = {
    id?: true
  }

  export type Personnel_paymentMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    has_registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Personnel_paymentMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    has_registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Personnel_paymentCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    has_registered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Personnel_paymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personnel_payment to aggregate.
     */
    where?: personnel_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personnel_payments to fetch.
     */
    orderBy?: personnel_paymentOrderByWithRelationInput | personnel_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personnel_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personnel_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personnel_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personnel_payments
    **/
    _count?: true | Personnel_paymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Personnel_paymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Personnel_paymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Personnel_paymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Personnel_paymentMaxAggregateInputType
  }

  export type GetPersonnel_paymentAggregateType<T extends Personnel_paymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonnel_payment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonnel_payment[P]>
      : GetScalarType<T[P], AggregatePersonnel_payment[P]>
  }




  export type personnel_paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personnel_paymentWhereInput
    orderBy?: personnel_paymentOrderByWithAggregationInput | personnel_paymentOrderByWithAggregationInput[]
    by: Personnel_paymentScalarFieldEnum[] | Personnel_paymentScalarFieldEnum
    having?: personnel_paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Personnel_paymentCountAggregateInputType | true
    _avg?: Personnel_paymentAvgAggregateInputType
    _sum?: Personnel_paymentSumAggregateInputType
    _min?: Personnel_paymentMinAggregateInputType
    _max?: Personnel_paymentMaxAggregateInputType
  }

  export type Personnel_paymentGroupByOutputType = {
    id: number
    fullname: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment: string | null
    status: string
    has_registered: boolean
    createdAt: Date
    updatedAt: Date
    _count: Personnel_paymentCountAggregateOutputType | null
    _avg: Personnel_paymentAvgAggregateOutputType | null
    _sum: Personnel_paymentSumAggregateOutputType | null
    _min: Personnel_paymentMinAggregateOutputType | null
    _max: Personnel_paymentMaxAggregateOutputType | null
  }

  type GetPersonnel_paymentGroupByPayload<T extends personnel_paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Personnel_paymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Personnel_paymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Personnel_paymentGroupByOutputType[P]>
            : GetScalarType<T[P], Personnel_paymentGroupByOutputType[P]>
        }
      >
    >


  export type personnel_paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    type?: boolean
    type_of_payment?: boolean
    status?: boolean
    has_registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personnel_payment"]>

  export type personnel_paymentSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    type?: boolean
    type_of_payment?: boolean
    status?: boolean
    has_registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $personnel_paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "personnel_payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      amount: string
      reference: string
      phone_number: string
      type: string
      type_of_payment: string | null
      status: string
      has_registered: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personnel_payment"]>
    composites: {}
  }


  type personnel_paymentGetPayload<S extends boolean | null | undefined | personnel_paymentDefaultArgs> = $Result.GetResult<Prisma.$personnel_paymentPayload, S>

  type personnel_paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<personnel_paymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Personnel_paymentCountAggregateInputType | true
    }

  export interface personnel_paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['personnel_payment'], meta: { name: 'personnel_payment' } }
    /**
     * Find zero or one Personnel_payment that matches the filter.
     * @param {personnel_paymentFindUniqueArgs} args - Arguments to find a Personnel_payment
     * @example
     * // Get one Personnel_payment
     * const personnel_payment = await prisma.personnel_payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends personnel_paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, personnel_paymentFindUniqueArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Personnel_payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {personnel_paymentFindUniqueOrThrowArgs} args - Arguments to find a Personnel_payment
     * @example
     * // Get one Personnel_payment
     * const personnel_payment = await prisma.personnel_payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends personnel_paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, personnel_paymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Personnel_payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personnel_paymentFindFirstArgs} args - Arguments to find a Personnel_payment
     * @example
     * // Get one Personnel_payment
     * const personnel_payment = await prisma.personnel_payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends personnel_paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, personnel_paymentFindFirstArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Personnel_payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personnel_paymentFindFirstOrThrowArgs} args - Arguments to find a Personnel_payment
     * @example
     * // Get one Personnel_payment
     * const personnel_payment = await prisma.personnel_payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends personnel_paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, personnel_paymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Personnel_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personnel_paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personnel_payments
     * const personnel_payments = await prisma.personnel_payment.findMany()
     * 
     * // Get first 10 Personnel_payments
     * const personnel_payments = await prisma.personnel_payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personnel_paymentWithIdOnly = await prisma.personnel_payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends personnel_paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personnel_paymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Personnel_payment.
     * @param {personnel_paymentCreateArgs} args - Arguments to create a Personnel_payment.
     * @example
     * // Create one Personnel_payment
     * const Personnel_payment = await prisma.personnel_payment.create({
     *   data: {
     *     // ... data to create a Personnel_payment
     *   }
     * })
     * 
    **/
    create<T extends personnel_paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, personnel_paymentCreateArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Personnel_payments.
     *     @param {personnel_paymentCreateManyArgs} args - Arguments to create many Personnel_payments.
     *     @example
     *     // Create many Personnel_payments
     *     const personnel_payment = await prisma.personnel_payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends personnel_paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personnel_paymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personnel_payment.
     * @param {personnel_paymentDeleteArgs} args - Arguments to delete one Personnel_payment.
     * @example
     * // Delete one Personnel_payment
     * const Personnel_payment = await prisma.personnel_payment.delete({
     *   where: {
     *     // ... filter to delete one Personnel_payment
     *   }
     * })
     * 
    **/
    delete<T extends personnel_paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, personnel_paymentDeleteArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Personnel_payment.
     * @param {personnel_paymentUpdateArgs} args - Arguments to update one Personnel_payment.
     * @example
     * // Update one Personnel_payment
     * const personnel_payment = await prisma.personnel_payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends personnel_paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, personnel_paymentUpdateArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Personnel_payments.
     * @param {personnel_paymentDeleteManyArgs} args - Arguments to filter Personnel_payments to delete.
     * @example
     * // Delete a few Personnel_payments
     * const { count } = await prisma.personnel_payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends personnel_paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, personnel_paymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personnel_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personnel_paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personnel_payments
     * const personnel_payment = await prisma.personnel_payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends personnel_paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, personnel_paymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personnel_payment.
     * @param {personnel_paymentUpsertArgs} args - Arguments to update or create a Personnel_payment.
     * @example
     * // Update or create a Personnel_payment
     * const personnel_payment = await prisma.personnel_payment.upsert({
     *   create: {
     *     // ... data to create a Personnel_payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personnel_payment we want to update
     *   }
     * })
    **/
    upsert<T extends personnel_paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, personnel_paymentUpsertArgs<ExtArgs>>
    ): Prisma__personnel_paymentClient<$Result.GetResult<Prisma.$personnel_paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Personnel_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personnel_paymentCountArgs} args - Arguments to filter Personnel_payments to count.
     * @example
     * // Count the number of Personnel_payments
     * const count = await prisma.personnel_payment.count({
     *   where: {
     *     // ... the filter for the Personnel_payments we want to count
     *   }
     * })
    **/
    count<T extends personnel_paymentCountArgs>(
      args?: Subset<T, personnel_paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Personnel_paymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personnel_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personnel_paymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Personnel_paymentAggregateArgs>(args: Subset<T, Personnel_paymentAggregateArgs>): Prisma.PrismaPromise<GetPersonnel_paymentAggregateType<T>>

    /**
     * Group by Personnel_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personnel_paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personnel_paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personnel_paymentGroupByArgs['orderBy'] }
        : { orderBy?: personnel_paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personnel_paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonnel_paymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the personnel_payment model
   */
  readonly fields: personnel_paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for personnel_payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personnel_paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the personnel_payment model
   */ 
  interface personnel_paymentFieldRefs {
    readonly id: FieldRef<"personnel_payment", 'Int'>
    readonly fullname: FieldRef<"personnel_payment", 'String'>
    readonly email: FieldRef<"personnel_payment", 'String'>
    readonly amount: FieldRef<"personnel_payment", 'String'>
    readonly reference: FieldRef<"personnel_payment", 'String'>
    readonly phone_number: FieldRef<"personnel_payment", 'String'>
    readonly type: FieldRef<"personnel_payment", 'String'>
    readonly type_of_payment: FieldRef<"personnel_payment", 'String'>
    readonly status: FieldRef<"personnel_payment", 'String'>
    readonly has_registered: FieldRef<"personnel_payment", 'Boolean'>
    readonly createdAt: FieldRef<"personnel_payment", 'DateTime'>
    readonly updatedAt: FieldRef<"personnel_payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * personnel_payment findUnique
   */
  export type personnel_paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * Filter, which personnel_payment to fetch.
     */
    where: personnel_paymentWhereUniqueInput
  }

  /**
   * personnel_payment findUniqueOrThrow
   */
  export type personnel_paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * Filter, which personnel_payment to fetch.
     */
    where: personnel_paymentWhereUniqueInput
  }

  /**
   * personnel_payment findFirst
   */
  export type personnel_paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * Filter, which personnel_payment to fetch.
     */
    where?: personnel_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personnel_payments to fetch.
     */
    orderBy?: personnel_paymentOrderByWithRelationInput | personnel_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personnel_payments.
     */
    cursor?: personnel_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personnel_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personnel_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personnel_payments.
     */
    distinct?: Personnel_paymentScalarFieldEnum | Personnel_paymentScalarFieldEnum[]
  }

  /**
   * personnel_payment findFirstOrThrow
   */
  export type personnel_paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * Filter, which personnel_payment to fetch.
     */
    where?: personnel_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personnel_payments to fetch.
     */
    orderBy?: personnel_paymentOrderByWithRelationInput | personnel_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personnel_payments.
     */
    cursor?: personnel_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personnel_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personnel_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personnel_payments.
     */
    distinct?: Personnel_paymentScalarFieldEnum | Personnel_paymentScalarFieldEnum[]
  }

  /**
   * personnel_payment findMany
   */
  export type personnel_paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * Filter, which personnel_payments to fetch.
     */
    where?: personnel_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personnel_payments to fetch.
     */
    orderBy?: personnel_paymentOrderByWithRelationInput | personnel_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personnel_payments.
     */
    cursor?: personnel_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personnel_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personnel_payments.
     */
    skip?: number
    distinct?: Personnel_paymentScalarFieldEnum | Personnel_paymentScalarFieldEnum[]
  }

  /**
   * personnel_payment create
   */
  export type personnel_paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * The data needed to create a personnel_payment.
     */
    data: XOR<personnel_paymentCreateInput, personnel_paymentUncheckedCreateInput>
  }

  /**
   * personnel_payment createMany
   */
  export type personnel_paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personnel_payments.
     */
    data: personnel_paymentCreateManyInput | personnel_paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personnel_payment update
   */
  export type personnel_paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * The data needed to update a personnel_payment.
     */
    data: XOR<personnel_paymentUpdateInput, personnel_paymentUncheckedUpdateInput>
    /**
     * Choose, which personnel_payment to update.
     */
    where: personnel_paymentWhereUniqueInput
  }

  /**
   * personnel_payment updateMany
   */
  export type personnel_paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personnel_payments.
     */
    data: XOR<personnel_paymentUpdateManyMutationInput, personnel_paymentUncheckedUpdateManyInput>
    /**
     * Filter which personnel_payments to update
     */
    where?: personnel_paymentWhereInput
  }

  /**
   * personnel_payment upsert
   */
  export type personnel_paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * The filter to search for the personnel_payment to update in case it exists.
     */
    where: personnel_paymentWhereUniqueInput
    /**
     * In case the personnel_payment found by the `where` argument doesn't exist, create a new personnel_payment with this data.
     */
    create: XOR<personnel_paymentCreateInput, personnel_paymentUncheckedCreateInput>
    /**
     * In case the personnel_payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personnel_paymentUpdateInput, personnel_paymentUncheckedUpdateInput>
  }

  /**
   * personnel_payment delete
   */
  export type personnel_paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
    /**
     * Filter which personnel_payment to delete.
     */
    where: personnel_paymentWhereUniqueInput
  }

  /**
   * personnel_payment deleteMany
   */
  export type personnel_paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personnel_payments to delete
     */
    where?: personnel_paymentWhereInput
  }

  /**
   * personnel_payment without action
   */
  export type personnel_paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personnel_payment
     */
    select?: personnel_paymentSelect<ExtArgs> | null
  }


  /**
   * Model facility_payment
   */

  export type AggregateFacility_payment = {
    _count: Facility_paymentCountAggregateOutputType | null
    _avg: Facility_paymentAvgAggregateOutputType | null
    _sum: Facility_paymentSumAggregateOutputType | null
    _min: Facility_paymentMinAggregateOutputType | null
    _max: Facility_paymentMaxAggregateOutputType | null
  }

  export type Facility_paymentAvgAggregateOutputType = {
    id: number | null
  }

  export type Facility_paymentSumAggregateOutputType = {
    id: number | null
  }

  export type Facility_paymentMinAggregateOutputType = {
    id: number | null
    facility_name: string | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    type: string | null
    type_of_payment: string | null
    status: string | null
    has_registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Facility_paymentMaxAggregateOutputType = {
    id: number | null
    facility_name: string | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    type: string | null
    type_of_payment: string | null
    status: string | null
    has_registered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Facility_paymentCountAggregateOutputType = {
    id: number
    facility_name: number
    email: number
    amount: number
    reference: number
    phone_number: number
    type: number
    type_of_payment: number
    status: number
    has_registered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Facility_paymentAvgAggregateInputType = {
    id?: true
  }

  export type Facility_paymentSumAggregateInputType = {
    id?: true
  }

  export type Facility_paymentMinAggregateInputType = {
    id?: true
    facility_name?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    has_registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Facility_paymentMaxAggregateInputType = {
    id?: true
    facility_name?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    has_registered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Facility_paymentCountAggregateInputType = {
    id?: true
    facility_name?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    has_registered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Facility_paymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_payment to aggregate.
     */
    where?: facility_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_payments to fetch.
     */
    orderBy?: facility_paymentOrderByWithRelationInput | facility_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facility_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facility_payments
    **/
    _count?: true | Facility_paymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Facility_paymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Facility_paymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Facility_paymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Facility_paymentMaxAggregateInputType
  }

  export type GetFacility_paymentAggregateType<T extends Facility_paymentAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility_payment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility_payment[P]>
      : GetScalarType<T[P], AggregateFacility_payment[P]>
  }




  export type facility_paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_paymentWhereInput
    orderBy?: facility_paymentOrderByWithAggregationInput | facility_paymentOrderByWithAggregationInput[]
    by: Facility_paymentScalarFieldEnum[] | Facility_paymentScalarFieldEnum
    having?: facility_paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Facility_paymentCountAggregateInputType | true
    _avg?: Facility_paymentAvgAggregateInputType
    _sum?: Facility_paymentSumAggregateInputType
    _min?: Facility_paymentMinAggregateInputType
    _max?: Facility_paymentMaxAggregateInputType
  }

  export type Facility_paymentGroupByOutputType = {
    id: number
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment: string | null
    status: string
    has_registered: boolean
    createdAt: Date
    updatedAt: Date
    _count: Facility_paymentCountAggregateOutputType | null
    _avg: Facility_paymentAvgAggregateOutputType | null
    _sum: Facility_paymentSumAggregateOutputType | null
    _min: Facility_paymentMinAggregateOutputType | null
    _max: Facility_paymentMaxAggregateOutputType | null
  }

  type GetFacility_paymentGroupByPayload<T extends facility_paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Facility_paymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Facility_paymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Facility_paymentGroupByOutputType[P]>
            : GetScalarType<T[P], Facility_paymentGroupByOutputType[P]>
        }
      >
    >


  export type facility_paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facility_name?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    type?: boolean
    type_of_payment?: boolean
    status?: boolean
    has_registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facility_payment"]>

  export type facility_paymentSelectScalar = {
    id?: boolean
    facility_name?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    type?: boolean
    type_of_payment?: boolean
    status?: boolean
    has_registered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $facility_paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility_payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facility_name: string
      email: string
      amount: string
      reference: string
      phone_number: string
      type: string
      type_of_payment: string | null
      status: string
      has_registered: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facility_payment"]>
    composites: {}
  }


  type facility_paymentGetPayload<S extends boolean | null | undefined | facility_paymentDefaultArgs> = $Result.GetResult<Prisma.$facility_paymentPayload, S>

  type facility_paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<facility_paymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Facility_paymentCountAggregateInputType | true
    }

  export interface facility_paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility_payment'], meta: { name: 'facility_payment' } }
    /**
     * Find zero or one Facility_payment that matches the filter.
     * @param {facility_paymentFindUniqueArgs} args - Arguments to find a Facility_payment
     * @example
     * // Get one Facility_payment
     * const facility_payment = await prisma.facility_payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends facility_paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, facility_paymentFindUniqueArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Facility_payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {facility_paymentFindUniqueOrThrowArgs} args - Arguments to find a Facility_payment
     * @example
     * // Get one Facility_payment
     * const facility_payment = await prisma.facility_payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends facility_paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_paymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Facility_payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_paymentFindFirstArgs} args - Arguments to find a Facility_payment
     * @example
     * // Get one Facility_payment
     * const facility_payment = await prisma.facility_payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends facility_paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_paymentFindFirstArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Facility_payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_paymentFindFirstOrThrowArgs} args - Arguments to find a Facility_payment
     * @example
     * // Get one Facility_payment
     * const facility_payment = await prisma.facility_payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends facility_paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_paymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Facility_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facility_payments
     * const facility_payments = await prisma.facility_payment.findMany()
     * 
     * // Get first 10 Facility_payments
     * const facility_payments = await prisma.facility_payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facility_paymentWithIdOnly = await prisma.facility_payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends facility_paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_paymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Facility_payment.
     * @param {facility_paymentCreateArgs} args - Arguments to create a Facility_payment.
     * @example
     * // Create one Facility_payment
     * const Facility_payment = await prisma.facility_payment.create({
     *   data: {
     *     // ... data to create a Facility_payment
     *   }
     * })
     * 
    **/
    create<T extends facility_paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, facility_paymentCreateArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Facility_payments.
     *     @param {facility_paymentCreateManyArgs} args - Arguments to create many Facility_payments.
     *     @example
     *     // Create many Facility_payments
     *     const facility_payment = await prisma.facility_payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends facility_paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_paymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility_payment.
     * @param {facility_paymentDeleteArgs} args - Arguments to delete one Facility_payment.
     * @example
     * // Delete one Facility_payment
     * const Facility_payment = await prisma.facility_payment.delete({
     *   where: {
     *     // ... filter to delete one Facility_payment
     *   }
     * })
     * 
    **/
    delete<T extends facility_paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, facility_paymentDeleteArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Facility_payment.
     * @param {facility_paymentUpdateArgs} args - Arguments to update one Facility_payment.
     * @example
     * // Update one Facility_payment
     * const facility_payment = await prisma.facility_payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends facility_paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, facility_paymentUpdateArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Facility_payments.
     * @param {facility_paymentDeleteManyArgs} args - Arguments to filter Facility_payments to delete.
     * @example
     * // Delete a few Facility_payments
     * const { count } = await prisma.facility_payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends facility_paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_paymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facility_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facility_payments
     * const facility_payment = await prisma.facility_payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends facility_paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, facility_paymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility_payment.
     * @param {facility_paymentUpsertArgs} args - Arguments to update or create a Facility_payment.
     * @example
     * // Update or create a Facility_payment
     * const facility_payment = await prisma.facility_payment.upsert({
     *   create: {
     *     // ... data to create a Facility_payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility_payment we want to update
     *   }
     * })
    **/
    upsert<T extends facility_paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, facility_paymentUpsertArgs<ExtArgs>>
    ): Prisma__facility_paymentClient<$Result.GetResult<Prisma.$facility_paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Facility_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_paymentCountArgs} args - Arguments to filter Facility_payments to count.
     * @example
     * // Count the number of Facility_payments
     * const count = await prisma.facility_payment.count({
     *   where: {
     *     // ... the filter for the Facility_payments we want to count
     *   }
     * })
    **/
    count<T extends facility_paymentCountArgs>(
      args?: Subset<T, facility_paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Facility_paymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Facility_paymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Facility_paymentAggregateArgs>(args: Subset<T, Facility_paymentAggregateArgs>): Prisma.PrismaPromise<GetFacility_paymentAggregateType<T>>

    /**
     * Group by Facility_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facility_paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facility_paymentGroupByArgs['orderBy'] }
        : { orderBy?: facility_paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facility_paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacility_paymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility_payment model
   */
  readonly fields: facility_paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility_payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facility_paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the facility_payment model
   */ 
  interface facility_paymentFieldRefs {
    readonly id: FieldRef<"facility_payment", 'Int'>
    readonly facility_name: FieldRef<"facility_payment", 'String'>
    readonly email: FieldRef<"facility_payment", 'String'>
    readonly amount: FieldRef<"facility_payment", 'String'>
    readonly reference: FieldRef<"facility_payment", 'String'>
    readonly phone_number: FieldRef<"facility_payment", 'String'>
    readonly type: FieldRef<"facility_payment", 'String'>
    readonly type_of_payment: FieldRef<"facility_payment", 'String'>
    readonly status: FieldRef<"facility_payment", 'String'>
    readonly has_registered: FieldRef<"facility_payment", 'Boolean'>
    readonly createdAt: FieldRef<"facility_payment", 'DateTime'>
    readonly updatedAt: FieldRef<"facility_payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * facility_payment findUnique
   */
  export type facility_paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_payment to fetch.
     */
    where: facility_paymentWhereUniqueInput
  }

  /**
   * facility_payment findUniqueOrThrow
   */
  export type facility_paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_payment to fetch.
     */
    where: facility_paymentWhereUniqueInput
  }

  /**
   * facility_payment findFirst
   */
  export type facility_paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_payment to fetch.
     */
    where?: facility_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_payments to fetch.
     */
    orderBy?: facility_paymentOrderByWithRelationInput | facility_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_payments.
     */
    cursor?: facility_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_payments.
     */
    distinct?: Facility_paymentScalarFieldEnum | Facility_paymentScalarFieldEnum[]
  }

  /**
   * facility_payment findFirstOrThrow
   */
  export type facility_paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_payment to fetch.
     */
    where?: facility_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_payments to fetch.
     */
    orderBy?: facility_paymentOrderByWithRelationInput | facility_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_payments.
     */
    cursor?: facility_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_payments.
     */
    distinct?: Facility_paymentScalarFieldEnum | Facility_paymentScalarFieldEnum[]
  }

  /**
   * facility_payment findMany
   */
  export type facility_paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_payments to fetch.
     */
    where?: facility_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_payments to fetch.
     */
    orderBy?: facility_paymentOrderByWithRelationInput | facility_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facility_payments.
     */
    cursor?: facility_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_payments.
     */
    skip?: number
    distinct?: Facility_paymentScalarFieldEnum | Facility_paymentScalarFieldEnum[]
  }

  /**
   * facility_payment create
   */
  export type facility_paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * The data needed to create a facility_payment.
     */
    data: XOR<facility_paymentCreateInput, facility_paymentUncheckedCreateInput>
  }

  /**
   * facility_payment createMany
   */
  export type facility_paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facility_payments.
     */
    data: facility_paymentCreateManyInput | facility_paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility_payment update
   */
  export type facility_paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * The data needed to update a facility_payment.
     */
    data: XOR<facility_paymentUpdateInput, facility_paymentUncheckedUpdateInput>
    /**
     * Choose, which facility_payment to update.
     */
    where: facility_paymentWhereUniqueInput
  }

  /**
   * facility_payment updateMany
   */
  export type facility_paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facility_payments.
     */
    data: XOR<facility_paymentUpdateManyMutationInput, facility_paymentUncheckedUpdateManyInput>
    /**
     * Filter which facility_payments to update
     */
    where?: facility_paymentWhereInput
  }

  /**
   * facility_payment upsert
   */
  export type facility_paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * The filter to search for the facility_payment to update in case it exists.
     */
    where: facility_paymentWhereUniqueInput
    /**
     * In case the facility_payment found by the `where` argument doesn't exist, create a new facility_payment with this data.
     */
    create: XOR<facility_paymentCreateInput, facility_paymentUncheckedCreateInput>
    /**
     * In case the facility_payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facility_paymentUpdateInput, facility_paymentUncheckedUpdateInput>
  }

  /**
   * facility_payment delete
   */
  export type facility_paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
    /**
     * Filter which facility_payment to delete.
     */
    where: facility_paymentWhereUniqueInput
  }

  /**
   * facility_payment deleteMany
   */
  export type facility_paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_payments to delete
     */
    where?: facility_paymentWhereInput
  }

  /**
   * facility_payment without action
   */
  export type facility_paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_payment
     */
    select?: facility_paymentSelect<ExtArgs> | null
  }


  /**
   * Model facility_complete_payment
   */

  export type AggregateFacility_complete_payment = {
    _count: Facility_complete_paymentCountAggregateOutputType | null
    _avg: Facility_complete_paymentAvgAggregateOutputType | null
    _sum: Facility_complete_paymentSumAggregateOutputType | null
    _min: Facility_complete_paymentMinAggregateOutputType | null
    _max: Facility_complete_paymentMaxAggregateOutputType | null
  }

  export type Facility_complete_paymentAvgAggregateOutputType = {
    id: number | null
  }

  export type Facility_complete_paymentSumAggregateOutputType = {
    id: number | null
  }

  export type Facility_complete_paymentMinAggregateOutputType = {
    id: number | null
    facility_name: string | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    type: string | null
    type_of_payment: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Facility_complete_paymentMaxAggregateOutputType = {
    id: number | null
    facility_name: string | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    type: string | null
    type_of_payment: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Facility_complete_paymentCountAggregateOutputType = {
    id: number
    facility_name: number
    email: number
    amount: number
    reference: number
    phone_number: number
    type: number
    type_of_payment: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Facility_complete_paymentAvgAggregateInputType = {
    id?: true
  }

  export type Facility_complete_paymentSumAggregateInputType = {
    id?: true
  }

  export type Facility_complete_paymentMinAggregateInputType = {
    id?: true
    facility_name?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Facility_complete_paymentMaxAggregateInputType = {
    id?: true
    facility_name?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Facility_complete_paymentCountAggregateInputType = {
    id?: true
    facility_name?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    type?: true
    type_of_payment?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Facility_complete_paymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_complete_payment to aggregate.
     */
    where?: facility_complete_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_complete_payments to fetch.
     */
    orderBy?: facility_complete_paymentOrderByWithRelationInput | facility_complete_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facility_complete_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_complete_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_complete_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facility_complete_payments
    **/
    _count?: true | Facility_complete_paymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Facility_complete_paymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Facility_complete_paymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Facility_complete_paymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Facility_complete_paymentMaxAggregateInputType
  }

  export type GetFacility_complete_paymentAggregateType<T extends Facility_complete_paymentAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility_complete_payment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility_complete_payment[P]>
      : GetScalarType<T[P], AggregateFacility_complete_payment[P]>
  }




  export type facility_complete_paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_complete_paymentWhereInput
    orderBy?: facility_complete_paymentOrderByWithAggregationInput | facility_complete_paymentOrderByWithAggregationInput[]
    by: Facility_complete_paymentScalarFieldEnum[] | Facility_complete_paymentScalarFieldEnum
    having?: facility_complete_paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Facility_complete_paymentCountAggregateInputType | true
    _avg?: Facility_complete_paymentAvgAggregateInputType
    _sum?: Facility_complete_paymentSumAggregateInputType
    _min?: Facility_complete_paymentMinAggregateInputType
    _max?: Facility_complete_paymentMaxAggregateInputType
  }

  export type Facility_complete_paymentGroupByOutputType = {
    id: number
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: Facility_complete_paymentCountAggregateOutputType | null
    _avg: Facility_complete_paymentAvgAggregateOutputType | null
    _sum: Facility_complete_paymentSumAggregateOutputType | null
    _min: Facility_complete_paymentMinAggregateOutputType | null
    _max: Facility_complete_paymentMaxAggregateOutputType | null
  }

  type GetFacility_complete_paymentGroupByPayload<T extends facility_complete_paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Facility_complete_paymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Facility_complete_paymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Facility_complete_paymentGroupByOutputType[P]>
            : GetScalarType<T[P], Facility_complete_paymentGroupByOutputType[P]>
        }
      >
    >


  export type facility_complete_paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facility_name?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    type?: boolean
    type_of_payment?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facility_complete_payment"]>

  export type facility_complete_paymentSelectScalar = {
    id?: boolean
    facility_name?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    type?: boolean
    type_of_payment?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $facility_complete_paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility_complete_payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facility_name: string
      email: string
      amount: string
      reference: string
      phone_number: string
      type: string
      type_of_payment: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facility_complete_payment"]>
    composites: {}
  }


  type facility_complete_paymentGetPayload<S extends boolean | null | undefined | facility_complete_paymentDefaultArgs> = $Result.GetResult<Prisma.$facility_complete_paymentPayload, S>

  type facility_complete_paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<facility_complete_paymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Facility_complete_paymentCountAggregateInputType | true
    }

  export interface facility_complete_paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility_complete_payment'], meta: { name: 'facility_complete_payment' } }
    /**
     * Find zero or one Facility_complete_payment that matches the filter.
     * @param {facility_complete_paymentFindUniqueArgs} args - Arguments to find a Facility_complete_payment
     * @example
     * // Get one Facility_complete_payment
     * const facility_complete_payment = await prisma.facility_complete_payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends facility_complete_paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, facility_complete_paymentFindUniqueArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Facility_complete_payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {facility_complete_paymentFindUniqueOrThrowArgs} args - Arguments to find a Facility_complete_payment
     * @example
     * // Get one Facility_complete_payment
     * const facility_complete_payment = await prisma.facility_complete_payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends facility_complete_paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_complete_paymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Facility_complete_payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_complete_paymentFindFirstArgs} args - Arguments to find a Facility_complete_payment
     * @example
     * // Get one Facility_complete_payment
     * const facility_complete_payment = await prisma.facility_complete_payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends facility_complete_paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_complete_paymentFindFirstArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Facility_complete_payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_complete_paymentFindFirstOrThrowArgs} args - Arguments to find a Facility_complete_payment
     * @example
     * // Get one Facility_complete_payment
     * const facility_complete_payment = await prisma.facility_complete_payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends facility_complete_paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_complete_paymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Facility_complete_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_complete_paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facility_complete_payments
     * const facility_complete_payments = await prisma.facility_complete_payment.findMany()
     * 
     * // Get first 10 Facility_complete_payments
     * const facility_complete_payments = await prisma.facility_complete_payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facility_complete_paymentWithIdOnly = await prisma.facility_complete_payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends facility_complete_paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_complete_paymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Facility_complete_payment.
     * @param {facility_complete_paymentCreateArgs} args - Arguments to create a Facility_complete_payment.
     * @example
     * // Create one Facility_complete_payment
     * const Facility_complete_payment = await prisma.facility_complete_payment.create({
     *   data: {
     *     // ... data to create a Facility_complete_payment
     *   }
     * })
     * 
    **/
    create<T extends facility_complete_paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, facility_complete_paymentCreateArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Facility_complete_payments.
     *     @param {facility_complete_paymentCreateManyArgs} args - Arguments to create many Facility_complete_payments.
     *     @example
     *     // Create many Facility_complete_payments
     *     const facility_complete_payment = await prisma.facility_complete_payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends facility_complete_paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_complete_paymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility_complete_payment.
     * @param {facility_complete_paymentDeleteArgs} args - Arguments to delete one Facility_complete_payment.
     * @example
     * // Delete one Facility_complete_payment
     * const Facility_complete_payment = await prisma.facility_complete_payment.delete({
     *   where: {
     *     // ... filter to delete one Facility_complete_payment
     *   }
     * })
     * 
    **/
    delete<T extends facility_complete_paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, facility_complete_paymentDeleteArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Facility_complete_payment.
     * @param {facility_complete_paymentUpdateArgs} args - Arguments to update one Facility_complete_payment.
     * @example
     * // Update one Facility_complete_payment
     * const facility_complete_payment = await prisma.facility_complete_payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends facility_complete_paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, facility_complete_paymentUpdateArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Facility_complete_payments.
     * @param {facility_complete_paymentDeleteManyArgs} args - Arguments to filter Facility_complete_payments to delete.
     * @example
     * // Delete a few Facility_complete_payments
     * const { count } = await prisma.facility_complete_payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends facility_complete_paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_complete_paymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facility_complete_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_complete_paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facility_complete_payments
     * const facility_complete_payment = await prisma.facility_complete_payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends facility_complete_paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, facility_complete_paymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility_complete_payment.
     * @param {facility_complete_paymentUpsertArgs} args - Arguments to update or create a Facility_complete_payment.
     * @example
     * // Update or create a Facility_complete_payment
     * const facility_complete_payment = await prisma.facility_complete_payment.upsert({
     *   create: {
     *     // ... data to create a Facility_complete_payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility_complete_payment we want to update
     *   }
     * })
    **/
    upsert<T extends facility_complete_paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, facility_complete_paymentUpsertArgs<ExtArgs>>
    ): Prisma__facility_complete_paymentClient<$Result.GetResult<Prisma.$facility_complete_paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Facility_complete_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_complete_paymentCountArgs} args - Arguments to filter Facility_complete_payments to count.
     * @example
     * // Count the number of Facility_complete_payments
     * const count = await prisma.facility_complete_payment.count({
     *   where: {
     *     // ... the filter for the Facility_complete_payments we want to count
     *   }
     * })
    **/
    count<T extends facility_complete_paymentCountArgs>(
      args?: Subset<T, facility_complete_paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Facility_complete_paymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility_complete_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Facility_complete_paymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Facility_complete_paymentAggregateArgs>(args: Subset<T, Facility_complete_paymentAggregateArgs>): Prisma.PrismaPromise<GetFacility_complete_paymentAggregateType<T>>

    /**
     * Group by Facility_complete_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_complete_paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facility_complete_paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facility_complete_paymentGroupByArgs['orderBy'] }
        : { orderBy?: facility_complete_paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facility_complete_paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacility_complete_paymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility_complete_payment model
   */
  readonly fields: facility_complete_paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility_complete_payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facility_complete_paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the facility_complete_payment model
   */ 
  interface facility_complete_paymentFieldRefs {
    readonly id: FieldRef<"facility_complete_payment", 'Int'>
    readonly facility_name: FieldRef<"facility_complete_payment", 'String'>
    readonly email: FieldRef<"facility_complete_payment", 'String'>
    readonly amount: FieldRef<"facility_complete_payment", 'String'>
    readonly reference: FieldRef<"facility_complete_payment", 'String'>
    readonly phone_number: FieldRef<"facility_complete_payment", 'String'>
    readonly type: FieldRef<"facility_complete_payment", 'String'>
    readonly type_of_payment: FieldRef<"facility_complete_payment", 'String'>
    readonly status: FieldRef<"facility_complete_payment", 'String'>
    readonly createdAt: FieldRef<"facility_complete_payment", 'DateTime'>
    readonly updatedAt: FieldRef<"facility_complete_payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * facility_complete_payment findUnique
   */
  export type facility_complete_paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_complete_payment to fetch.
     */
    where: facility_complete_paymentWhereUniqueInput
  }

  /**
   * facility_complete_payment findUniqueOrThrow
   */
  export type facility_complete_paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_complete_payment to fetch.
     */
    where: facility_complete_paymentWhereUniqueInput
  }

  /**
   * facility_complete_payment findFirst
   */
  export type facility_complete_paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_complete_payment to fetch.
     */
    where?: facility_complete_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_complete_payments to fetch.
     */
    orderBy?: facility_complete_paymentOrderByWithRelationInput | facility_complete_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_complete_payments.
     */
    cursor?: facility_complete_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_complete_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_complete_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_complete_payments.
     */
    distinct?: Facility_complete_paymentScalarFieldEnum | Facility_complete_paymentScalarFieldEnum[]
  }

  /**
   * facility_complete_payment findFirstOrThrow
   */
  export type facility_complete_paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_complete_payment to fetch.
     */
    where?: facility_complete_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_complete_payments to fetch.
     */
    orderBy?: facility_complete_paymentOrderByWithRelationInput | facility_complete_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_complete_payments.
     */
    cursor?: facility_complete_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_complete_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_complete_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_complete_payments.
     */
    distinct?: Facility_complete_paymentScalarFieldEnum | Facility_complete_paymentScalarFieldEnum[]
  }

  /**
   * facility_complete_payment findMany
   */
  export type facility_complete_paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * Filter, which facility_complete_payments to fetch.
     */
    where?: facility_complete_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_complete_payments to fetch.
     */
    orderBy?: facility_complete_paymentOrderByWithRelationInput | facility_complete_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facility_complete_payments.
     */
    cursor?: facility_complete_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_complete_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_complete_payments.
     */
    skip?: number
    distinct?: Facility_complete_paymentScalarFieldEnum | Facility_complete_paymentScalarFieldEnum[]
  }

  /**
   * facility_complete_payment create
   */
  export type facility_complete_paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * The data needed to create a facility_complete_payment.
     */
    data: XOR<facility_complete_paymentCreateInput, facility_complete_paymentUncheckedCreateInput>
  }

  /**
   * facility_complete_payment createMany
   */
  export type facility_complete_paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facility_complete_payments.
     */
    data: facility_complete_paymentCreateManyInput | facility_complete_paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility_complete_payment update
   */
  export type facility_complete_paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * The data needed to update a facility_complete_payment.
     */
    data: XOR<facility_complete_paymentUpdateInput, facility_complete_paymentUncheckedUpdateInput>
    /**
     * Choose, which facility_complete_payment to update.
     */
    where: facility_complete_paymentWhereUniqueInput
  }

  /**
   * facility_complete_payment updateMany
   */
  export type facility_complete_paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facility_complete_payments.
     */
    data: XOR<facility_complete_paymentUpdateManyMutationInput, facility_complete_paymentUncheckedUpdateManyInput>
    /**
     * Filter which facility_complete_payments to update
     */
    where?: facility_complete_paymentWhereInput
  }

  /**
   * facility_complete_payment upsert
   */
  export type facility_complete_paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * The filter to search for the facility_complete_payment to update in case it exists.
     */
    where: facility_complete_paymentWhereUniqueInput
    /**
     * In case the facility_complete_payment found by the `where` argument doesn't exist, create a new facility_complete_payment with this data.
     */
    create: XOR<facility_complete_paymentCreateInput, facility_complete_paymentUncheckedCreateInput>
    /**
     * In case the facility_complete_payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facility_complete_paymentUpdateInput, facility_complete_paymentUncheckedUpdateInput>
  }

  /**
   * facility_complete_payment delete
   */
  export type facility_complete_paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
    /**
     * Filter which facility_complete_payment to delete.
     */
    where: facility_complete_paymentWhereUniqueInput
  }

  /**
   * facility_complete_payment deleteMany
   */
  export type facility_complete_paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_complete_payments to delete
     */
    where?: facility_complete_paymentWhereInput
  }

  /**
   * facility_complete_payment without action
   */
  export type facility_complete_paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_complete_payment
     */
    select?: facility_complete_paymentSelect<ExtArgs> | null
  }


  /**
   * Model revokedToken
   */

  export type AggregateRevokedToken = {
    _count: RevokedTokenCountAggregateOutputType | null
    _avg: RevokedTokenAvgAggregateOutputType | null
    _sum: RevokedTokenSumAggregateOutputType | null
    _min: RevokedTokenMinAggregateOutputType | null
    _max: RevokedTokenMaxAggregateOutputType | null
  }

  export type RevokedTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type RevokedTokenSumAggregateOutputType = {
    id: number | null
  }

  export type RevokedTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
  }

  export type RevokedTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
  }

  export type RevokedTokenCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    _all: number
  }


  export type RevokedTokenAvgAggregateInputType = {
    id?: true
  }

  export type RevokedTokenSumAggregateInputType = {
    id?: true
  }

  export type RevokedTokenMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type RevokedTokenMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type RevokedTokenCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type RevokedTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which revokedToken to aggregate.
     */
    where?: revokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revokedTokens to fetch.
     */
    orderBy?: revokedTokenOrderByWithRelationInput | revokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: revokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned revokedTokens
    **/
    _count?: true | RevokedTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevokedTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevokedTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevokedTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevokedTokenMaxAggregateInputType
  }

  export type GetRevokedTokenAggregateType<T extends RevokedTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRevokedToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevokedToken[P]>
      : GetScalarType<T[P], AggregateRevokedToken[P]>
  }




  export type revokedTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: revokedTokenWhereInput
    orderBy?: revokedTokenOrderByWithAggregationInput | revokedTokenOrderByWithAggregationInput[]
    by: RevokedTokenScalarFieldEnum[] | RevokedTokenScalarFieldEnum
    having?: revokedTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevokedTokenCountAggregateInputType | true
    _avg?: RevokedTokenAvgAggregateInputType
    _sum?: RevokedTokenSumAggregateInputType
    _min?: RevokedTokenMinAggregateInputType
    _max?: RevokedTokenMaxAggregateInputType
  }

  export type RevokedTokenGroupByOutputType = {
    id: number
    token: string
    createdAt: Date
    _count: RevokedTokenCountAggregateOutputType | null
    _avg: RevokedTokenAvgAggregateOutputType | null
    _sum: RevokedTokenSumAggregateOutputType | null
    _min: RevokedTokenMinAggregateOutputType | null
    _max: RevokedTokenMaxAggregateOutputType | null
  }

  type GetRevokedTokenGroupByPayload<T extends revokedTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevokedTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevokedTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevokedTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RevokedTokenGroupByOutputType[P]>
        }
      >
    >


  export type revokedTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["revokedToken"]>

  export type revokedTokenSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }



  export type $revokedTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "revokedToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      createdAt: Date
    }, ExtArgs["result"]["revokedToken"]>
    composites: {}
  }


  type revokedTokenGetPayload<S extends boolean | null | undefined | revokedTokenDefaultArgs> = $Result.GetResult<Prisma.$revokedTokenPayload, S>

  type revokedTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<revokedTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RevokedTokenCountAggregateInputType | true
    }

  export interface revokedTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['revokedToken'], meta: { name: 'revokedToken' } }
    /**
     * Find zero or one RevokedToken that matches the filter.
     * @param {revokedTokenFindUniqueArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends revokedTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, revokedTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RevokedToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {revokedTokenFindUniqueOrThrowArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends revokedTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, revokedTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RevokedToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revokedTokenFindFirstArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends revokedTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, revokedTokenFindFirstArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RevokedToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revokedTokenFindFirstOrThrowArgs} args - Arguments to find a RevokedToken
     * @example
     * // Get one RevokedToken
     * const revokedToken = await prisma.revokedToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends revokedTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, revokedTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RevokedTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revokedTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevokedTokens
     * const revokedTokens = await prisma.revokedToken.findMany()
     * 
     * // Get first 10 RevokedTokens
     * const revokedTokens = await prisma.revokedToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revokedTokenWithIdOnly = await prisma.revokedToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends revokedTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, revokedTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RevokedToken.
     * @param {revokedTokenCreateArgs} args - Arguments to create a RevokedToken.
     * @example
     * // Create one RevokedToken
     * const RevokedToken = await prisma.revokedToken.create({
     *   data: {
     *     // ... data to create a RevokedToken
     *   }
     * })
     * 
    **/
    create<T extends revokedTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, revokedTokenCreateArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RevokedTokens.
     *     @param {revokedTokenCreateManyArgs} args - Arguments to create many RevokedTokens.
     *     @example
     *     // Create many RevokedTokens
     *     const revokedToken = await prisma.revokedToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends revokedTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, revokedTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RevokedToken.
     * @param {revokedTokenDeleteArgs} args - Arguments to delete one RevokedToken.
     * @example
     * // Delete one RevokedToken
     * const RevokedToken = await prisma.revokedToken.delete({
     *   where: {
     *     // ... filter to delete one RevokedToken
     *   }
     * })
     * 
    **/
    delete<T extends revokedTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, revokedTokenDeleteArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RevokedToken.
     * @param {revokedTokenUpdateArgs} args - Arguments to update one RevokedToken.
     * @example
     * // Update one RevokedToken
     * const revokedToken = await prisma.revokedToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends revokedTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, revokedTokenUpdateArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RevokedTokens.
     * @param {revokedTokenDeleteManyArgs} args - Arguments to filter RevokedTokens to delete.
     * @example
     * // Delete a few RevokedTokens
     * const { count } = await prisma.revokedToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends revokedTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, revokedTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevokedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revokedTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevokedTokens
     * const revokedToken = await prisma.revokedToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends revokedTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, revokedTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RevokedToken.
     * @param {revokedTokenUpsertArgs} args - Arguments to update or create a RevokedToken.
     * @example
     * // Update or create a RevokedToken
     * const revokedToken = await prisma.revokedToken.upsert({
     *   create: {
     *     // ... data to create a RevokedToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevokedToken we want to update
     *   }
     * })
    **/
    upsert<T extends revokedTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, revokedTokenUpsertArgs<ExtArgs>>
    ): Prisma__revokedTokenClient<$Result.GetResult<Prisma.$revokedTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RevokedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revokedTokenCountArgs} args - Arguments to filter RevokedTokens to count.
     * @example
     * // Count the number of RevokedTokens
     * const count = await prisma.revokedToken.count({
     *   where: {
     *     // ... the filter for the RevokedTokens we want to count
     *   }
     * })
    **/
    count<T extends revokedTokenCountArgs>(
      args?: Subset<T, revokedTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevokedTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevokedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevokedTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevokedTokenAggregateArgs>(args: Subset<T, RevokedTokenAggregateArgs>): Prisma.PrismaPromise<GetRevokedTokenAggregateType<T>>

    /**
     * Group by RevokedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revokedTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends revokedTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: revokedTokenGroupByArgs['orderBy'] }
        : { orderBy?: revokedTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, revokedTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevokedTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the revokedToken model
   */
  readonly fields: revokedTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for revokedToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__revokedTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the revokedToken model
   */ 
  interface revokedTokenFieldRefs {
    readonly id: FieldRef<"revokedToken", 'Int'>
    readonly token: FieldRef<"revokedToken", 'String'>
    readonly createdAt: FieldRef<"revokedToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * revokedToken findUnique
   */
  export type revokedTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * Filter, which revokedToken to fetch.
     */
    where: revokedTokenWhereUniqueInput
  }

  /**
   * revokedToken findUniqueOrThrow
   */
  export type revokedTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * Filter, which revokedToken to fetch.
     */
    where: revokedTokenWhereUniqueInput
  }

  /**
   * revokedToken findFirst
   */
  export type revokedTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * Filter, which revokedToken to fetch.
     */
    where?: revokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revokedTokens to fetch.
     */
    orderBy?: revokedTokenOrderByWithRelationInput | revokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for revokedTokens.
     */
    cursor?: revokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of revokedTokens.
     */
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * revokedToken findFirstOrThrow
   */
  export type revokedTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * Filter, which revokedToken to fetch.
     */
    where?: revokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revokedTokens to fetch.
     */
    orderBy?: revokedTokenOrderByWithRelationInput | revokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for revokedTokens.
     */
    cursor?: revokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revokedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of revokedTokens.
     */
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * revokedToken findMany
   */
  export type revokedTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * Filter, which revokedTokens to fetch.
     */
    where?: revokedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revokedTokens to fetch.
     */
    orderBy?: revokedTokenOrderByWithRelationInput | revokedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing revokedTokens.
     */
    cursor?: revokedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revokedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revokedTokens.
     */
    skip?: number
    distinct?: RevokedTokenScalarFieldEnum | RevokedTokenScalarFieldEnum[]
  }

  /**
   * revokedToken create
   */
  export type revokedTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a revokedToken.
     */
    data: XOR<revokedTokenCreateInput, revokedTokenUncheckedCreateInput>
  }

  /**
   * revokedToken createMany
   */
  export type revokedTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many revokedTokens.
     */
    data: revokedTokenCreateManyInput | revokedTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * revokedToken update
   */
  export type revokedTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a revokedToken.
     */
    data: XOR<revokedTokenUpdateInput, revokedTokenUncheckedUpdateInput>
    /**
     * Choose, which revokedToken to update.
     */
    where: revokedTokenWhereUniqueInput
  }

  /**
   * revokedToken updateMany
   */
  export type revokedTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update revokedTokens.
     */
    data: XOR<revokedTokenUpdateManyMutationInput, revokedTokenUncheckedUpdateManyInput>
    /**
     * Filter which revokedTokens to update
     */
    where?: revokedTokenWhereInput
  }

  /**
   * revokedToken upsert
   */
  export type revokedTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the revokedToken to update in case it exists.
     */
    where: revokedTokenWhereUniqueInput
    /**
     * In case the revokedToken found by the `where` argument doesn't exist, create a new revokedToken with this data.
     */
    create: XOR<revokedTokenCreateInput, revokedTokenUncheckedCreateInput>
    /**
     * In case the revokedToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<revokedTokenUpdateInput, revokedTokenUncheckedUpdateInput>
  }

  /**
   * revokedToken delete
   */
  export type revokedTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
    /**
     * Filter which revokedToken to delete.
     */
    where: revokedTokenWhereUniqueInput
  }

  /**
   * revokedToken deleteMany
   */
  export type revokedTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which revokedTokens to delete
     */
    where?: revokedTokenWhereInput
  }

  /**
   * revokedToken without action
   */
  export type revokedTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revokedToken
     */
    select?: revokedTokenSelect<ExtArgs> | null
  }


  /**
   * Model facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    id: number | null
    number_of_bed: number | null
    assigned_inspector: number | null
  }

  export type FacilitySumAggregateOutputType = {
    id: number | null
    number_of_bed: number | null
    assigned_inspector: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: number | null
    facility_name: string | null
    location: string | null
    cac: string | null
    cac_image: string | null
    owner_name: string | null
    owner_phone_number: string | null
    owner_contact_address: string | null
    owner_nin: string | null
    owner_nin_image: string | null
    owner_passport: string | null
    owner_email: string | null
    owner_gender: string | null
    lga: string | null
    facility_sector: $Enums.Sector | null
    facility_type: $Enums.Facility_Type | null
    facility_level: $Enums.Level | null
    personnel_incharge: string | null
    personnel_incharge_name: string | null
    personnel_incharge_practice_id: string | null
    supervising_doctor_name: string | null
    supervising_doctor_practice_id: string | null
    services_offered: string | null
    landmark: string | null
    number_of_bed: number | null
    source_of_water: string | null
    method_of_disposal: string | null
    site_plan: string | null
    building_plan: string | null
    tax_clearance_certificate: string | null
    compliance_certificate: string | null
    expiry_date: string | null
    enugu_facility_id: string | null
    reference: string | null
    current_reference: string | null
    password: string | null
    reset_password_token: string | null
    assigned_inspector: number | null
    inspection_date: Date | null
    is_inspected: boolean | null
    certificate_url: string | null
    cac_status: $Enums.Status | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: number | null
    facility_name: string | null
    location: string | null
    cac: string | null
    cac_image: string | null
    owner_name: string | null
    owner_phone_number: string | null
    owner_contact_address: string | null
    owner_nin: string | null
    owner_nin_image: string | null
    owner_passport: string | null
    owner_email: string | null
    owner_gender: string | null
    lga: string | null
    facility_sector: $Enums.Sector | null
    facility_type: $Enums.Facility_Type | null
    facility_level: $Enums.Level | null
    personnel_incharge: string | null
    personnel_incharge_name: string | null
    personnel_incharge_practice_id: string | null
    supervising_doctor_name: string | null
    supervising_doctor_practice_id: string | null
    services_offered: string | null
    landmark: string | null
    number_of_bed: number | null
    source_of_water: string | null
    method_of_disposal: string | null
    site_plan: string | null
    building_plan: string | null
    tax_clearance_certificate: string | null
    compliance_certificate: string | null
    expiry_date: string | null
    enugu_facility_id: string | null
    reference: string | null
    current_reference: string | null
    password: string | null
    reset_password_token: string | null
    assigned_inspector: number | null
    inspection_date: Date | null
    is_inspected: boolean | null
    certificate_url: string | null
    cac_status: $Enums.Status | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    facility_name: number
    location: number
    cac: number
    cac_image: number
    owner_name: number
    owner_phone_number: number
    owner_contact_address: number
    owner_nin: number
    owner_nin_image: number
    owner_passport: number
    owner_email: number
    owner_gender: number
    lga: number
    facility_sector: number
    facility_type: number
    facility_level: number
    personnel_incharge: number
    personnel_incharge_name: number
    personnel_incharge_practice_id: number
    supervising_doctor_name: number
    supervising_doctor_practice_id: number
    services_offered: number
    landmark: number
    number_of_bed: number
    source_of_water: number
    method_of_disposal: number
    site_plan: number
    building_plan: number
    tax_clearance_certificate: number
    compliance_certificate: number
    facility_personnel_count: number
    expiry_date: number
    enugu_facility_id: number
    reference: number
    current_reference: number
    password: number
    reset_password_token: number
    assigned_inspector: number
    inspection_date: number
    is_inspected: number
    certificate_url: number
    cac_status: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    id?: true
    number_of_bed?: true
    assigned_inspector?: true
  }

  export type FacilitySumAggregateInputType = {
    id?: true
    number_of_bed?: true
    assigned_inspector?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    facility_name?: true
    location?: true
    cac?: true
    cac_image?: true
    owner_name?: true
    owner_phone_number?: true
    owner_contact_address?: true
    owner_nin?: true
    owner_nin_image?: true
    owner_passport?: true
    owner_email?: true
    owner_gender?: true
    lga?: true
    facility_sector?: true
    facility_type?: true
    facility_level?: true
    personnel_incharge?: true
    personnel_incharge_name?: true
    personnel_incharge_practice_id?: true
    supervising_doctor_name?: true
    supervising_doctor_practice_id?: true
    services_offered?: true
    landmark?: true
    number_of_bed?: true
    source_of_water?: true
    method_of_disposal?: true
    site_plan?: true
    building_plan?: true
    tax_clearance_certificate?: true
    compliance_certificate?: true
    expiry_date?: true
    enugu_facility_id?: true
    reference?: true
    current_reference?: true
    password?: true
    reset_password_token?: true
    assigned_inspector?: true
    inspection_date?: true
    is_inspected?: true
    certificate_url?: true
    cac_status?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    facility_name?: true
    location?: true
    cac?: true
    cac_image?: true
    owner_name?: true
    owner_phone_number?: true
    owner_contact_address?: true
    owner_nin?: true
    owner_nin_image?: true
    owner_passport?: true
    owner_email?: true
    owner_gender?: true
    lga?: true
    facility_sector?: true
    facility_type?: true
    facility_level?: true
    personnel_incharge?: true
    personnel_incharge_name?: true
    personnel_incharge_practice_id?: true
    supervising_doctor_name?: true
    supervising_doctor_practice_id?: true
    services_offered?: true
    landmark?: true
    number_of_bed?: true
    source_of_water?: true
    method_of_disposal?: true
    site_plan?: true
    building_plan?: true
    tax_clearance_certificate?: true
    compliance_certificate?: true
    expiry_date?: true
    enugu_facility_id?: true
    reference?: true
    current_reference?: true
    password?: true
    reset_password_token?: true
    assigned_inspector?: true
    inspection_date?: true
    is_inspected?: true
    certificate_url?: true
    cac_status?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    facility_name?: true
    location?: true
    cac?: true
    cac_image?: true
    owner_name?: true
    owner_phone_number?: true
    owner_contact_address?: true
    owner_nin?: true
    owner_nin_image?: true
    owner_passport?: true
    owner_email?: true
    owner_gender?: true
    lga?: true
    facility_sector?: true
    facility_type?: true
    facility_level?: true
    personnel_incharge?: true
    personnel_incharge_name?: true
    personnel_incharge_practice_id?: true
    supervising_doctor_name?: true
    supervising_doctor_practice_id?: true
    services_offered?: true
    landmark?: true
    number_of_bed?: true
    source_of_water?: true
    method_of_disposal?: true
    site_plan?: true
    building_plan?: true
    tax_clearance_certificate?: true
    compliance_certificate?: true
    facility_personnel_count?: true
    expiry_date?: true
    enugu_facility_id?: true
    reference?: true
    current_reference?: true
    password?: true
    reset_password_token?: true
    assigned_inspector?: true
    inspection_date?: true
    is_inspected?: true
    certificate_url?: true
    cac_status?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility to aggregate.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type facilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facilityWhereInput
    orderBy?: facilityOrderByWithAggregationInput | facilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: facilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: number
    facility_name: string
    location: string
    cac: string
    cac_image: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image: string | null
    owner_passport: string | null
    owner_email: string
    owner_gender: string | null
    lga: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge: string | null
    personnel_incharge_name: string | null
    personnel_incharge_practice_id: string | null
    supervising_doctor_name: string | null
    supervising_doctor_practice_id: string | null
    services_offered: string
    landmark: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate: string | null
    facility_personnel_count: JsonValue | null
    expiry_date: string | null
    enugu_facility_id: string
    reference: string
    current_reference: string | null
    password: string | null
    reset_password_token: string | null
    assigned_inspector: number | null
    inspection_date: Date | null
    is_inspected: boolean
    certificate_url: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends facilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type facilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facility_name?: boolean
    location?: boolean
    cac?: boolean
    cac_image?: boolean
    owner_name?: boolean
    owner_phone_number?: boolean
    owner_contact_address?: boolean
    owner_nin?: boolean
    owner_nin_image?: boolean
    owner_passport?: boolean
    owner_email?: boolean
    owner_gender?: boolean
    lga?: boolean
    facility_sector?: boolean
    facility_type?: boolean
    facility_level?: boolean
    personnel_incharge?: boolean
    personnel_incharge_name?: boolean
    personnel_incharge_practice_id?: boolean
    supervising_doctor_name?: boolean
    supervising_doctor_practice_id?: boolean
    services_offered?: boolean
    landmark?: boolean
    number_of_bed?: boolean
    source_of_water?: boolean
    method_of_disposal?: boolean
    site_plan?: boolean
    building_plan?: boolean
    tax_clearance_certificate?: boolean
    compliance_certificate?: boolean
    facility_personnel_count?: boolean
    expiry_date?: boolean
    enugu_facility_id?: boolean
    reference?: boolean
    current_reference?: boolean
    password?: boolean
    reset_password_token?: boolean
    assigned_inspector?: boolean
    inspection_date?: boolean
    is_inspected?: boolean
    certificate_url?: boolean
    cac_status?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility_personnel?: boolean | facility$facility_personnelArgs<ExtArgs>
    inspection_review?: boolean | facility$inspection_reviewArgs<ExtArgs>
    inspector?: boolean | facility$inspectorArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type facilitySelectScalar = {
    id?: boolean
    facility_name?: boolean
    location?: boolean
    cac?: boolean
    cac_image?: boolean
    owner_name?: boolean
    owner_phone_number?: boolean
    owner_contact_address?: boolean
    owner_nin?: boolean
    owner_nin_image?: boolean
    owner_passport?: boolean
    owner_email?: boolean
    owner_gender?: boolean
    lga?: boolean
    facility_sector?: boolean
    facility_type?: boolean
    facility_level?: boolean
    personnel_incharge?: boolean
    personnel_incharge_name?: boolean
    personnel_incharge_practice_id?: boolean
    supervising_doctor_name?: boolean
    supervising_doctor_practice_id?: boolean
    services_offered?: boolean
    landmark?: boolean
    number_of_bed?: boolean
    source_of_water?: boolean
    method_of_disposal?: boolean
    site_plan?: boolean
    building_plan?: boolean
    tax_clearance_certificate?: boolean
    compliance_certificate?: boolean
    facility_personnel_count?: boolean
    expiry_date?: boolean
    enugu_facility_id?: boolean
    reference?: boolean
    current_reference?: boolean
    password?: boolean
    reset_password_token?: boolean
    assigned_inspector?: boolean
    inspection_date?: boolean
    is_inspected?: boolean
    certificate_url?: boolean
    cac_status?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type facilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_personnel?: boolean | facility$facility_personnelArgs<ExtArgs>
    inspection_review?: boolean | facility$inspection_reviewArgs<ExtArgs>
    inspector?: boolean | facility$inspectorArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $facilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility"
    objects: {
      facility_personnel: Prisma.$facility_personnelPayload<ExtArgs>[]
      inspection_review: Prisma.$inspection_reviewPayload<ExtArgs>[]
      inspector: Prisma.$inspectorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facility_name: string
      location: string
      cac: string
      cac_image: string | null
      owner_name: string
      owner_phone_number: string
      owner_contact_address: string
      owner_nin: string
      owner_nin_image: string | null
      owner_passport: string | null
      owner_email: string
      owner_gender: string | null
      lga: string | null
      facility_sector: $Enums.Sector
      facility_type: $Enums.Facility_Type
      facility_level: $Enums.Level
      personnel_incharge: string | null
      personnel_incharge_name: string | null
      personnel_incharge_practice_id: string | null
      supervising_doctor_name: string | null
      supervising_doctor_practice_id: string | null
      services_offered: string
      landmark: string | null
      number_of_bed: number
      source_of_water: string
      method_of_disposal: string
      site_plan: string
      building_plan: string
      tax_clearance_certificate: string
      compliance_certificate: string | null
      facility_personnel_count: Prisma.JsonValue | null
      expiry_date: string | null
      enugu_facility_id: string
      reference: string
      current_reference: string | null
      password: string | null
      reset_password_token: string | null
      assigned_inspector: number | null
      inspection_date: Date | null
      is_inspected: boolean
      certificate_url: string | null
      cac_status: $Enums.Status
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }


  type facilityGetPayload<S extends boolean | null | undefined | facilityDefaultArgs> = $Result.GetResult<Prisma.$facilityPayload, S>

  type facilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<facilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface facilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility'], meta: { name: 'facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {facilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends facilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, facilityFindUniqueArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Facility that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {facilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends facilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends facilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, facilityFindFirstArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends facilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends facilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Facility.
     * @param {facilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
    **/
    create<T extends facilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, facilityCreateArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Facilities.
     *     @param {facilityCreateManyArgs} args - Arguments to create many Facilities.
     *     @example
     *     // Create many Facilities
     *     const facility = await prisma.facility.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends facilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility.
     * @param {facilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
    **/
    delete<T extends facilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, facilityDeleteArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Facility.
     * @param {facilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends facilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, facilityUpdateArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Facilities.
     * @param {facilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends facilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends facilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, facilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {facilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
    **/
    upsert<T extends facilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, facilityUpsertArgs<ExtArgs>>
    ): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends facilityCountArgs>(
      args?: Subset<T, facilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facilityGroupByArgs['orderBy'] }
        : { orderBy?: facilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility model
   */
  readonly fields: facilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    facility_personnel<T extends facility$facility_personnelArgs<ExtArgs> = {}>(args?: Subset<T, facility$facility_personnelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'findMany'> | Null>;

    inspection_review<T extends facility$inspection_reviewArgs<ExtArgs> = {}>(args?: Subset<T, facility$inspection_reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inspection_reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    inspector<T extends facility$inspectorArgs<ExtArgs> = {}>(args?: Subset<T, facility$inspectorArgs<ExtArgs>>): Prisma__inspectorClient<$Result.GetResult<Prisma.$inspectorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the facility model
   */ 
  interface facilityFieldRefs {
    readonly id: FieldRef<"facility", 'Int'>
    readonly facility_name: FieldRef<"facility", 'String'>
    readonly location: FieldRef<"facility", 'String'>
    readonly cac: FieldRef<"facility", 'String'>
    readonly cac_image: FieldRef<"facility", 'String'>
    readonly owner_name: FieldRef<"facility", 'String'>
    readonly owner_phone_number: FieldRef<"facility", 'String'>
    readonly owner_contact_address: FieldRef<"facility", 'String'>
    readonly owner_nin: FieldRef<"facility", 'String'>
    readonly owner_nin_image: FieldRef<"facility", 'String'>
    readonly owner_passport: FieldRef<"facility", 'String'>
    readonly owner_email: FieldRef<"facility", 'String'>
    readonly owner_gender: FieldRef<"facility", 'String'>
    readonly lga: FieldRef<"facility", 'String'>
    readonly facility_sector: FieldRef<"facility", 'Sector'>
    readonly facility_type: FieldRef<"facility", 'Facility_Type'>
    readonly facility_level: FieldRef<"facility", 'Level'>
    readonly personnel_incharge: FieldRef<"facility", 'String'>
    readonly personnel_incharge_name: FieldRef<"facility", 'String'>
    readonly personnel_incharge_practice_id: FieldRef<"facility", 'String'>
    readonly supervising_doctor_name: FieldRef<"facility", 'String'>
    readonly supervising_doctor_practice_id: FieldRef<"facility", 'String'>
    readonly services_offered: FieldRef<"facility", 'String'>
    readonly landmark: FieldRef<"facility", 'String'>
    readonly number_of_bed: FieldRef<"facility", 'Int'>
    readonly source_of_water: FieldRef<"facility", 'String'>
    readonly method_of_disposal: FieldRef<"facility", 'String'>
    readonly site_plan: FieldRef<"facility", 'String'>
    readonly building_plan: FieldRef<"facility", 'String'>
    readonly tax_clearance_certificate: FieldRef<"facility", 'String'>
    readonly compliance_certificate: FieldRef<"facility", 'String'>
    readonly facility_personnel_count: FieldRef<"facility", 'Json'>
    readonly expiry_date: FieldRef<"facility", 'String'>
    readonly enugu_facility_id: FieldRef<"facility", 'String'>
    readonly reference: FieldRef<"facility", 'String'>
    readonly current_reference: FieldRef<"facility", 'String'>
    readonly password: FieldRef<"facility", 'String'>
    readonly reset_password_token: FieldRef<"facility", 'String'>
    readonly assigned_inspector: FieldRef<"facility", 'Int'>
    readonly inspection_date: FieldRef<"facility", 'DateTime'>
    readonly is_inspected: FieldRef<"facility", 'Boolean'>
    readonly certificate_url: FieldRef<"facility", 'String'>
    readonly cac_status: FieldRef<"facility", 'Status'>
    readonly status: FieldRef<"facility", 'Status'>
    readonly createdAt: FieldRef<"facility", 'DateTime'>
    readonly updatedAt: FieldRef<"facility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * facility findUnique
   */
  export type facilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility findUniqueOrThrow
   */
  export type facilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility findFirst
   */
  export type facilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility findFirstOrThrow
   */
  export type facilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility findMany
   */
  export type facilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facilities to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility create
   */
  export type facilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The data needed to create a facility.
     */
    data: XOR<facilityCreateInput, facilityUncheckedCreateInput>
  }

  /**
   * facility createMany
   */
  export type facilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facilities.
     */
    data: facilityCreateManyInput | facilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility update
   */
  export type facilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The data needed to update a facility.
     */
    data: XOR<facilityUpdateInput, facilityUncheckedUpdateInput>
    /**
     * Choose, which facility to update.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility updateMany
   */
  export type facilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facilities.
     */
    data: XOR<facilityUpdateManyMutationInput, facilityUncheckedUpdateManyInput>
    /**
     * Filter which facilities to update
     */
    where?: facilityWhereInput
  }

  /**
   * facility upsert
   */
  export type facilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The filter to search for the facility to update in case it exists.
     */
    where: facilityWhereUniqueInput
    /**
     * In case the facility found by the `where` argument doesn't exist, create a new facility with this data.
     */
    create: XOR<facilityCreateInput, facilityUncheckedCreateInput>
    /**
     * In case the facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facilityUpdateInput, facilityUncheckedUpdateInput>
  }

  /**
   * facility delete
   */
  export type facilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter which facility to delete.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility deleteMany
   */
  export type facilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facilities to delete
     */
    where?: facilityWhereInput
  }

  /**
   * facility.facility_personnel
   */
  export type facility$facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    where?: facility_personnelWhereInput
    orderBy?: facility_personnelOrderByWithRelationInput | facility_personnelOrderByWithRelationInput[]
    cursor?: facility_personnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facility_personnelScalarFieldEnum | Facility_personnelScalarFieldEnum[]
  }

  /**
   * facility.inspection_review
   */
  export type facility$inspection_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspection_review
     */
    select?: inspection_reviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspection_reviewInclude<ExtArgs> | null
    where?: inspection_reviewWhereInput
    orderBy?: inspection_reviewOrderByWithRelationInput | inspection_reviewOrderByWithRelationInput[]
    cursor?: inspection_reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inspection_reviewScalarFieldEnum | Inspection_reviewScalarFieldEnum[]
  }

  /**
   * facility.inspector
   */
  export type facility$inspectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inspector
     */
    select?: inspectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inspectorInclude<ExtArgs> | null
    where?: inspectorWhereInput
  }

  /**
   * facility without action
   */
  export type facilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
  }


  /**
   * Model facility_personnel
   */

  export type AggregateFacility_personnel = {
    _count: Facility_personnelCountAggregateOutputType | null
    _avg: Facility_personnelAvgAggregateOutputType | null
    _sum: Facility_personnelSumAggregateOutputType | null
    _min: Facility_personnelMinAggregateOutputType | null
    _max: Facility_personnelMaxAggregateOutputType | null
  }

  export type Facility_personnelAvgAggregateOutputType = {
    id: number | null
    facility_id: number | null
    user_id: number | null
  }

  export type Facility_personnelSumAggregateOutputType = {
    id: number | null
    facility_id: number | null
    user_id: number | null
  }

  export type Facility_personnelMinAggregateOutputType = {
    id: number | null
    facility_id: number | null
    user_id: number | null
    enugu_practice_id: string | null
    type: string | null
    createdAt: Date | null
  }

  export type Facility_personnelMaxAggregateOutputType = {
    id: number | null
    facility_id: number | null
    user_id: number | null
    enugu_practice_id: string | null
    type: string | null
    createdAt: Date | null
  }

  export type Facility_personnelCountAggregateOutputType = {
    id: number
    facility_id: number
    user_id: number
    enugu_practice_id: number
    type: number
    createdAt: number
    _all: number
  }


  export type Facility_personnelAvgAggregateInputType = {
    id?: true
    facility_id?: true
    user_id?: true
  }

  export type Facility_personnelSumAggregateInputType = {
    id?: true
    facility_id?: true
    user_id?: true
  }

  export type Facility_personnelMinAggregateInputType = {
    id?: true
    facility_id?: true
    user_id?: true
    enugu_practice_id?: true
    type?: true
    createdAt?: true
  }

  export type Facility_personnelMaxAggregateInputType = {
    id?: true
    facility_id?: true
    user_id?: true
    enugu_practice_id?: true
    type?: true
    createdAt?: true
  }

  export type Facility_personnelCountAggregateInputType = {
    id?: true
    facility_id?: true
    user_id?: true
    enugu_practice_id?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type Facility_personnelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_personnel to aggregate.
     */
    where?: facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_personnels to fetch.
     */
    orderBy?: facility_personnelOrderByWithRelationInput | facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_personnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facility_personnels
    **/
    _count?: true | Facility_personnelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Facility_personnelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Facility_personnelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Facility_personnelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Facility_personnelMaxAggregateInputType
  }

  export type GetFacility_personnelAggregateType<T extends Facility_personnelAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility_personnel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility_personnel[P]>
      : GetScalarType<T[P], AggregateFacility_personnel[P]>
  }




  export type facility_personnelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_personnelWhereInput
    orderBy?: facility_personnelOrderByWithAggregationInput | facility_personnelOrderByWithAggregationInput[]
    by: Facility_personnelScalarFieldEnum[] | Facility_personnelScalarFieldEnum
    having?: facility_personnelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Facility_personnelCountAggregateInputType | true
    _avg?: Facility_personnelAvgAggregateInputType
    _sum?: Facility_personnelSumAggregateInputType
    _min?: Facility_personnelMinAggregateInputType
    _max?: Facility_personnelMaxAggregateInputType
  }

  export type Facility_personnelGroupByOutputType = {
    id: number
    facility_id: number
    user_id: number
    enugu_practice_id: string
    type: string
    createdAt: Date
    _count: Facility_personnelCountAggregateOutputType | null
    _avg: Facility_personnelAvgAggregateOutputType | null
    _sum: Facility_personnelSumAggregateOutputType | null
    _min: Facility_personnelMinAggregateOutputType | null
    _max: Facility_personnelMaxAggregateOutputType | null
  }

  type GetFacility_personnelGroupByPayload<T extends facility_personnelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Facility_personnelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Facility_personnelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Facility_personnelGroupByOutputType[P]>
            : GetScalarType<T[P], Facility_personnelGroupByOutputType[P]>
        }
      >
    >


  export type facility_personnelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facility_id?: boolean
    user_id?: boolean
    enugu_practice_id?: boolean
    type?: boolean
    createdAt?: boolean
    facility?: boolean | facilityDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility_personnel"]>

  export type facility_personnelSelectScalar = {
    id?: boolean
    facility_id?: boolean
    user_id?: boolean
    enugu_practice_id?: boolean
    type?: boolean
    createdAt?: boolean
  }


  export type facility_personnelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | facilityDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $facility_personnelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility_personnel"
    objects: {
      facility: Prisma.$facilityPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facility_id: number
      user_id: number
      enugu_practice_id: string
      type: string
      createdAt: Date
    }, ExtArgs["result"]["facility_personnel"]>
    composites: {}
  }


  type facility_personnelGetPayload<S extends boolean | null | undefined | facility_personnelDefaultArgs> = $Result.GetResult<Prisma.$facility_personnelPayload, S>

  type facility_personnelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<facility_personnelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Facility_personnelCountAggregateInputType | true
    }

  export interface facility_personnelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility_personnel'], meta: { name: 'facility_personnel' } }
    /**
     * Find zero or one Facility_personnel that matches the filter.
     * @param {facility_personnelFindUniqueArgs} args - Arguments to find a Facility_personnel
     * @example
     * // Get one Facility_personnel
     * const facility_personnel = await prisma.facility_personnel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends facility_personnelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, facility_personnelFindUniqueArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Facility_personnel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {facility_personnelFindUniqueOrThrowArgs} args - Arguments to find a Facility_personnel
     * @example
     * // Get one Facility_personnel
     * const facility_personnel = await prisma.facility_personnel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends facility_personnelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_personnelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Facility_personnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_personnelFindFirstArgs} args - Arguments to find a Facility_personnel
     * @example
     * // Get one Facility_personnel
     * const facility_personnel = await prisma.facility_personnel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends facility_personnelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_personnelFindFirstArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Facility_personnel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_personnelFindFirstOrThrowArgs} args - Arguments to find a Facility_personnel
     * @example
     * // Get one Facility_personnel
     * const facility_personnel = await prisma.facility_personnel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends facility_personnelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_personnelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Facility_personnels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_personnelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facility_personnels
     * const facility_personnels = await prisma.facility_personnel.findMany()
     * 
     * // Get first 10 Facility_personnels
     * const facility_personnels = await prisma.facility_personnel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facility_personnelWithIdOnly = await prisma.facility_personnel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends facility_personnelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_personnelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Facility_personnel.
     * @param {facility_personnelCreateArgs} args - Arguments to create a Facility_personnel.
     * @example
     * // Create one Facility_personnel
     * const Facility_personnel = await prisma.facility_personnel.create({
     *   data: {
     *     // ... data to create a Facility_personnel
     *   }
     * })
     * 
    **/
    create<T extends facility_personnelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, facility_personnelCreateArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Facility_personnels.
     *     @param {facility_personnelCreateManyArgs} args - Arguments to create many Facility_personnels.
     *     @example
     *     // Create many Facility_personnels
     *     const facility_personnel = await prisma.facility_personnel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends facility_personnelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_personnelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility_personnel.
     * @param {facility_personnelDeleteArgs} args - Arguments to delete one Facility_personnel.
     * @example
     * // Delete one Facility_personnel
     * const Facility_personnel = await prisma.facility_personnel.delete({
     *   where: {
     *     // ... filter to delete one Facility_personnel
     *   }
     * })
     * 
    **/
    delete<T extends facility_personnelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, facility_personnelDeleteArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Facility_personnel.
     * @param {facility_personnelUpdateArgs} args - Arguments to update one Facility_personnel.
     * @example
     * // Update one Facility_personnel
     * const facility_personnel = await prisma.facility_personnel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends facility_personnelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, facility_personnelUpdateArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Facility_personnels.
     * @param {facility_personnelDeleteManyArgs} args - Arguments to filter Facility_personnels to delete.
     * @example
     * // Delete a few Facility_personnels
     * const { count } = await prisma.facility_personnel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends facility_personnelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, facility_personnelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facility_personnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_personnelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facility_personnels
     * const facility_personnel = await prisma.facility_personnel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends facility_personnelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, facility_personnelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility_personnel.
     * @param {facility_personnelUpsertArgs} args - Arguments to update or create a Facility_personnel.
     * @example
     * // Update or create a Facility_personnel
     * const facility_personnel = await prisma.facility_personnel.upsert({
     *   create: {
     *     // ... data to create a Facility_personnel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility_personnel we want to update
     *   }
     * })
    **/
    upsert<T extends facility_personnelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, facility_personnelUpsertArgs<ExtArgs>>
    ): Prisma__facility_personnelClient<$Result.GetResult<Prisma.$facility_personnelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Facility_personnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_personnelCountArgs} args - Arguments to filter Facility_personnels to count.
     * @example
     * // Count the number of Facility_personnels
     * const count = await prisma.facility_personnel.count({
     *   where: {
     *     // ... the filter for the Facility_personnels we want to count
     *   }
     * })
    **/
    count<T extends facility_personnelCountArgs>(
      args?: Subset<T, facility_personnelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Facility_personnelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility_personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Facility_personnelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Facility_personnelAggregateArgs>(args: Subset<T, Facility_personnelAggregateArgs>): Prisma.PrismaPromise<GetFacility_personnelAggregateType<T>>

    /**
     * Group by Facility_personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_personnelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facility_personnelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facility_personnelGroupByArgs['orderBy'] }
        : { orderBy?: facility_personnelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facility_personnelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacility_personnelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility_personnel model
   */
  readonly fields: facility_personnelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility_personnel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facility_personnelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    facility<T extends facilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, facilityDefaultArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the facility_personnel model
   */ 
  interface facility_personnelFieldRefs {
    readonly id: FieldRef<"facility_personnel", 'Int'>
    readonly facility_id: FieldRef<"facility_personnel", 'Int'>
    readonly user_id: FieldRef<"facility_personnel", 'Int'>
    readonly enugu_practice_id: FieldRef<"facility_personnel", 'String'>
    readonly type: FieldRef<"facility_personnel", 'String'>
    readonly createdAt: FieldRef<"facility_personnel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * facility_personnel findUnique
   */
  export type facility_personnelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which facility_personnel to fetch.
     */
    where: facility_personnelWhereUniqueInput
  }

  /**
   * facility_personnel findUniqueOrThrow
   */
  export type facility_personnelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which facility_personnel to fetch.
     */
    where: facility_personnelWhereUniqueInput
  }

  /**
   * facility_personnel findFirst
   */
  export type facility_personnelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which facility_personnel to fetch.
     */
    where?: facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_personnels to fetch.
     */
    orderBy?: facility_personnelOrderByWithRelationInput | facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_personnels.
     */
    cursor?: facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_personnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_personnels.
     */
    distinct?: Facility_personnelScalarFieldEnum | Facility_personnelScalarFieldEnum[]
  }

  /**
   * facility_personnel findFirstOrThrow
   */
  export type facility_personnelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which facility_personnel to fetch.
     */
    where?: facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_personnels to fetch.
     */
    orderBy?: facility_personnelOrderByWithRelationInput | facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_personnels.
     */
    cursor?: facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_personnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_personnels.
     */
    distinct?: Facility_personnelScalarFieldEnum | Facility_personnelScalarFieldEnum[]
  }

  /**
   * facility_personnel findMany
   */
  export type facility_personnelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which facility_personnels to fetch.
     */
    where?: facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_personnels to fetch.
     */
    orderBy?: facility_personnelOrderByWithRelationInput | facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facility_personnels.
     */
    cursor?: facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_personnels.
     */
    skip?: number
    distinct?: Facility_personnelScalarFieldEnum | Facility_personnelScalarFieldEnum[]
  }

  /**
   * facility_personnel create
   */
  export type facility_personnelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * The data needed to create a facility_personnel.
     */
    data: XOR<facility_personnelCreateInput, facility_personnelUncheckedCreateInput>
  }

  /**
   * facility_personnel createMany
   */
  export type facility_personnelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facility_personnels.
     */
    data: facility_personnelCreateManyInput | facility_personnelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility_personnel update
   */
  export type facility_personnelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * The data needed to update a facility_personnel.
     */
    data: XOR<facility_personnelUpdateInput, facility_personnelUncheckedUpdateInput>
    /**
     * Choose, which facility_personnel to update.
     */
    where: facility_personnelWhereUniqueInput
  }

  /**
   * facility_personnel updateMany
   */
  export type facility_personnelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facility_personnels.
     */
    data: XOR<facility_personnelUpdateManyMutationInput, facility_personnelUncheckedUpdateManyInput>
    /**
     * Filter which facility_personnels to update
     */
    where?: facility_personnelWhereInput
  }

  /**
   * facility_personnel upsert
   */
  export type facility_personnelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * The filter to search for the facility_personnel to update in case it exists.
     */
    where: facility_personnelWhereUniqueInput
    /**
     * In case the facility_personnel found by the `where` argument doesn't exist, create a new facility_personnel with this data.
     */
    create: XOR<facility_personnelCreateInput, facility_personnelUncheckedCreateInput>
    /**
     * In case the facility_personnel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facility_personnelUpdateInput, facility_personnelUncheckedUpdateInput>
  }

  /**
   * facility_personnel delete
   */
  export type facility_personnelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
    /**
     * Filter which facility_personnel to delete.
     */
    where: facility_personnelWhereUniqueInput
  }

  /**
   * facility_personnel deleteMany
   */
  export type facility_personnelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_personnels to delete
     */
    where?: facility_personnelWhereInput
  }

  /**
   * facility_personnel without action
   */
  export type facility_personnelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_personnel
     */
    select?: facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_personnelInclude<ExtArgs> | null
  }


  /**
   * Model food_facility
   */

  export type AggregateFood_facility = {
    _count: Food_facilityCountAggregateOutputType | null
    _avg: Food_facilityAvgAggregateOutputType | null
    _sum: Food_facilitySumAggregateOutputType | null
    _min: Food_facilityMinAggregateOutputType | null
    _max: Food_facilityMaxAggregateOutputType | null
  }

  export type Food_facilityAvgAggregateOutputType = {
    id: number | null
  }

  export type Food_facilitySumAggregateOutputType = {
    id: number | null
  }

  export type Food_facilityMinAggregateOutputType = {
    id: number | null
    facility_name: string | null
    location: string | null
    cac: string | null
    cac_image: string | null
    owner_name: string | null
    owner_phone_number: string | null
    owner_contact_address: string | null
    owner_nin: string | null
    owner_nin_image: string | null
    owner_email: string | null
    lga: string | null
    landmark: string | null
    source_of_water: string | null
    method_of_disposal: string | null
    category: $Enums.Category | null
    expiry_date: string | null
    enugu_food_facility_id: string | null
    reference: string | null
    current_reference: string | null
    password: string | null
    reset_password_token: string | null
    cac_status: $Enums.Status | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_facilityMaxAggregateOutputType = {
    id: number | null
    facility_name: string | null
    location: string | null
    cac: string | null
    cac_image: string | null
    owner_name: string | null
    owner_phone_number: string | null
    owner_contact_address: string | null
    owner_nin: string | null
    owner_nin_image: string | null
    owner_email: string | null
    lga: string | null
    landmark: string | null
    source_of_water: string | null
    method_of_disposal: string | null
    category: $Enums.Category | null
    expiry_date: string | null
    enugu_food_facility_id: string | null
    reference: string | null
    current_reference: string | null
    password: string | null
    reset_password_token: string | null
    cac_status: $Enums.Status | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_facilityCountAggregateOutputType = {
    id: number
    facility_name: number
    location: number
    cac: number
    cac_image: number
    owner_name: number
    owner_phone_number: number
    owner_contact_address: number
    owner_nin: number
    owner_nin_image: number
    owner_email: number
    lga: number
    landmark: number
    source_of_water: number
    method_of_disposal: number
    category: number
    facility_personnel_count: number
    expiry_date: number
    enugu_food_facility_id: number
    reference: number
    current_reference: number
    password: number
    reset_password_token: number
    cac_status: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Food_facilityAvgAggregateInputType = {
    id?: true
  }

  export type Food_facilitySumAggregateInputType = {
    id?: true
  }

  export type Food_facilityMinAggregateInputType = {
    id?: true
    facility_name?: true
    location?: true
    cac?: true
    cac_image?: true
    owner_name?: true
    owner_phone_number?: true
    owner_contact_address?: true
    owner_nin?: true
    owner_nin_image?: true
    owner_email?: true
    lga?: true
    landmark?: true
    source_of_water?: true
    method_of_disposal?: true
    category?: true
    expiry_date?: true
    enugu_food_facility_id?: true
    reference?: true
    current_reference?: true
    password?: true
    reset_password_token?: true
    cac_status?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_facilityMaxAggregateInputType = {
    id?: true
    facility_name?: true
    location?: true
    cac?: true
    cac_image?: true
    owner_name?: true
    owner_phone_number?: true
    owner_contact_address?: true
    owner_nin?: true
    owner_nin_image?: true
    owner_email?: true
    lga?: true
    landmark?: true
    source_of_water?: true
    method_of_disposal?: true
    category?: true
    expiry_date?: true
    enugu_food_facility_id?: true
    reference?: true
    current_reference?: true
    password?: true
    reset_password_token?: true
    cac_status?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_facilityCountAggregateInputType = {
    id?: true
    facility_name?: true
    location?: true
    cac?: true
    cac_image?: true
    owner_name?: true
    owner_phone_number?: true
    owner_contact_address?: true
    owner_nin?: true
    owner_nin_image?: true
    owner_email?: true
    lga?: true
    landmark?: true
    source_of_water?: true
    method_of_disposal?: true
    category?: true
    facility_personnel_count?: true
    expiry_date?: true
    enugu_food_facility_id?: true
    reference?: true
    current_reference?: true
    password?: true
    reset_password_token?: true
    cac_status?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Food_facilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_facility to aggregate.
     */
    where?: food_facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facilities to fetch.
     */
    orderBy?: food_facilityOrderByWithRelationInput | food_facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: food_facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned food_facilities
    **/
    _count?: true | Food_facilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Food_facilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Food_facilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_facilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_facilityMaxAggregateInputType
  }

  export type GetFood_facilityAggregateType<T extends Food_facilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_facility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_facility[P]>
      : GetScalarType<T[P], AggregateFood_facility[P]>
  }




  export type food_facilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_facilityWhereInput
    orderBy?: food_facilityOrderByWithAggregationInput | food_facilityOrderByWithAggregationInput[]
    by: Food_facilityScalarFieldEnum[] | Food_facilityScalarFieldEnum
    having?: food_facilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_facilityCountAggregateInputType | true
    _avg?: Food_facilityAvgAggregateInputType
    _sum?: Food_facilitySumAggregateInputType
    _min?: Food_facilityMinAggregateInputType
    _max?: Food_facilityMaxAggregateInputType
  }

  export type Food_facilityGroupByOutputType = {
    id: number
    facility_name: string
    location: string
    cac: string
    cac_image: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image: string | null
    owner_email: string
    lga: string | null
    landmark: string | null
    source_of_water: string
    method_of_disposal: string
    category: $Enums.Category | null
    facility_personnel_count: JsonValue | null
    expiry_date: string | null
    enugu_food_facility_id: string
    reference: string
    current_reference: string | null
    password: string | null
    reset_password_token: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: Food_facilityCountAggregateOutputType | null
    _avg: Food_facilityAvgAggregateOutputType | null
    _sum: Food_facilitySumAggregateOutputType | null
    _min: Food_facilityMinAggregateOutputType | null
    _max: Food_facilityMaxAggregateOutputType | null
  }

  type GetFood_facilityGroupByPayload<T extends food_facilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_facilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_facilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_facilityGroupByOutputType[P]>
            : GetScalarType<T[P], Food_facilityGroupByOutputType[P]>
        }
      >
    >


  export type food_facilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facility_name?: boolean
    location?: boolean
    cac?: boolean
    cac_image?: boolean
    owner_name?: boolean
    owner_phone_number?: boolean
    owner_contact_address?: boolean
    owner_nin?: boolean
    owner_nin_image?: boolean
    owner_email?: boolean
    lga?: boolean
    landmark?: boolean
    source_of_water?: boolean
    method_of_disposal?: boolean
    category?: boolean
    facility_personnel_count?: boolean
    expiry_date?: boolean
    enugu_food_facility_id?: boolean
    reference?: boolean
    current_reference?: boolean
    password?: boolean
    reset_password_token?: boolean
    cac_status?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food_facility_personnel?: boolean | food_facility$food_facility_personnelArgs<ExtArgs>
    _count?: boolean | Food_facilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food_facility"]>

  export type food_facilitySelectScalar = {
    id?: boolean
    facility_name?: boolean
    location?: boolean
    cac?: boolean
    cac_image?: boolean
    owner_name?: boolean
    owner_phone_number?: boolean
    owner_contact_address?: boolean
    owner_nin?: boolean
    owner_nin_image?: boolean
    owner_email?: boolean
    lga?: boolean
    landmark?: boolean
    source_of_water?: boolean
    method_of_disposal?: boolean
    category?: boolean
    facility_personnel_count?: boolean
    expiry_date?: boolean
    enugu_food_facility_id?: boolean
    reference?: boolean
    current_reference?: boolean
    password?: boolean
    reset_password_token?: boolean
    cac_status?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type food_facilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_facility_personnel?: boolean | food_facility$food_facility_personnelArgs<ExtArgs>
    _count?: boolean | Food_facilityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $food_facilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food_facility"
    objects: {
      food_facility_personnel: Prisma.$food_facility_personnelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facility_name: string
      location: string
      cac: string
      cac_image: string | null
      owner_name: string
      owner_phone_number: string
      owner_contact_address: string
      owner_nin: string
      owner_nin_image: string | null
      owner_email: string
      lga: string | null
      landmark: string | null
      source_of_water: string
      method_of_disposal: string
      category: $Enums.Category | null
      facility_personnel_count: Prisma.JsonValue | null
      expiry_date: string | null
      enugu_food_facility_id: string
      reference: string
      current_reference: string | null
      password: string | null
      reset_password_token: string | null
      cac_status: $Enums.Status
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food_facility"]>
    composites: {}
  }


  type food_facilityGetPayload<S extends boolean | null | undefined | food_facilityDefaultArgs> = $Result.GetResult<Prisma.$food_facilityPayload, S>

  type food_facilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<food_facilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Food_facilityCountAggregateInputType | true
    }

  export interface food_facilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food_facility'], meta: { name: 'food_facility' } }
    /**
     * Find zero or one Food_facility that matches the filter.
     * @param {food_facilityFindUniqueArgs} args - Arguments to find a Food_facility
     * @example
     * // Get one Food_facility
     * const food_facility = await prisma.food_facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends food_facilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, food_facilityFindUniqueArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Food_facility that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {food_facilityFindUniqueOrThrowArgs} args - Arguments to find a Food_facility
     * @example
     * // Get one Food_facility
     * const food_facility = await prisma.food_facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends food_facilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Food_facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facilityFindFirstArgs} args - Arguments to find a Food_facility
     * @example
     * // Get one Food_facility
     * const food_facility = await prisma.food_facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends food_facilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facilityFindFirstArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Food_facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facilityFindFirstOrThrowArgs} args - Arguments to find a Food_facility
     * @example
     * // Get one Food_facility
     * const food_facility = await prisma.food_facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends food_facilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Food_facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_facilities
     * const food_facilities = await prisma.food_facility.findMany()
     * 
     * // Get first 10 Food_facilities
     * const food_facilities = await prisma.food_facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const food_facilityWithIdOnly = await prisma.food_facility.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends food_facilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Food_facility.
     * @param {food_facilityCreateArgs} args - Arguments to create a Food_facility.
     * @example
     * // Create one Food_facility
     * const Food_facility = await prisma.food_facility.create({
     *   data: {
     *     // ... data to create a Food_facility
     *   }
     * })
     * 
    **/
    create<T extends food_facilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, food_facilityCreateArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Food_facilities.
     *     @param {food_facilityCreateManyArgs} args - Arguments to create many Food_facilities.
     *     @example
     *     // Create many Food_facilities
     *     const food_facility = await prisma.food_facility.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends food_facilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food_facility.
     * @param {food_facilityDeleteArgs} args - Arguments to delete one Food_facility.
     * @example
     * // Delete one Food_facility
     * const Food_facility = await prisma.food_facility.delete({
     *   where: {
     *     // ... filter to delete one Food_facility
     *   }
     * })
     * 
    **/
    delete<T extends food_facilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, food_facilityDeleteArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Food_facility.
     * @param {food_facilityUpdateArgs} args - Arguments to update one Food_facility.
     * @example
     * // Update one Food_facility
     * const food_facility = await prisma.food_facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends food_facilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, food_facilityUpdateArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Food_facilities.
     * @param {food_facilityDeleteManyArgs} args - Arguments to filter Food_facilities to delete.
     * @example
     * // Delete a few Food_facilities
     * const { count } = await prisma.food_facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends food_facilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_facilities
     * const food_facility = await prisma.food_facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends food_facilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, food_facilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food_facility.
     * @param {food_facilityUpsertArgs} args - Arguments to update or create a Food_facility.
     * @example
     * // Update or create a Food_facility
     * const food_facility = await prisma.food_facility.upsert({
     *   create: {
     *     // ... data to create a Food_facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_facility we want to update
     *   }
     * })
    **/
    upsert<T extends food_facilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, food_facilityUpsertArgs<ExtArgs>>
    ): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Food_facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facilityCountArgs} args - Arguments to filter Food_facilities to count.
     * @example
     * // Count the number of Food_facilities
     * const count = await prisma.food_facility.count({
     *   where: {
     *     // ... the filter for the Food_facilities we want to count
     *   }
     * })
    **/
    count<T extends food_facilityCountArgs>(
      args?: Subset<T, food_facilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_facilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_facilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Food_facilityAggregateArgs>(args: Subset<T, Food_facilityAggregateArgs>): Prisma.PrismaPromise<GetFood_facilityAggregateType<T>>

    /**
     * Group by Food_facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends food_facilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: food_facilityGroupByArgs['orderBy'] }
        : { orderBy?: food_facilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, food_facilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_facilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food_facility model
   */
  readonly fields: food_facilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food_facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__food_facilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    food_facility_personnel<T extends food_facility$food_facility_personnelArgs<ExtArgs> = {}>(args?: Subset<T, food_facility$food_facility_personnelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the food_facility model
   */ 
  interface food_facilityFieldRefs {
    readonly id: FieldRef<"food_facility", 'Int'>
    readonly facility_name: FieldRef<"food_facility", 'String'>
    readonly location: FieldRef<"food_facility", 'String'>
    readonly cac: FieldRef<"food_facility", 'String'>
    readonly cac_image: FieldRef<"food_facility", 'String'>
    readonly owner_name: FieldRef<"food_facility", 'String'>
    readonly owner_phone_number: FieldRef<"food_facility", 'String'>
    readonly owner_contact_address: FieldRef<"food_facility", 'String'>
    readonly owner_nin: FieldRef<"food_facility", 'String'>
    readonly owner_nin_image: FieldRef<"food_facility", 'String'>
    readonly owner_email: FieldRef<"food_facility", 'String'>
    readonly lga: FieldRef<"food_facility", 'String'>
    readonly landmark: FieldRef<"food_facility", 'String'>
    readonly source_of_water: FieldRef<"food_facility", 'String'>
    readonly method_of_disposal: FieldRef<"food_facility", 'String'>
    readonly category: FieldRef<"food_facility", 'Category'>
    readonly facility_personnel_count: FieldRef<"food_facility", 'Json'>
    readonly expiry_date: FieldRef<"food_facility", 'String'>
    readonly enugu_food_facility_id: FieldRef<"food_facility", 'String'>
    readonly reference: FieldRef<"food_facility", 'String'>
    readonly current_reference: FieldRef<"food_facility", 'String'>
    readonly password: FieldRef<"food_facility", 'String'>
    readonly reset_password_token: FieldRef<"food_facility", 'String'>
    readonly cac_status: FieldRef<"food_facility", 'Status'>
    readonly status: FieldRef<"food_facility", 'Status'>
    readonly createdAt: FieldRef<"food_facility", 'DateTime'>
    readonly updatedAt: FieldRef<"food_facility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * food_facility findUnique
   */
  export type food_facilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * Filter, which food_facility to fetch.
     */
    where: food_facilityWhereUniqueInput
  }

  /**
   * food_facility findUniqueOrThrow
   */
  export type food_facilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * Filter, which food_facility to fetch.
     */
    where: food_facilityWhereUniqueInput
  }

  /**
   * food_facility findFirst
   */
  export type food_facilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * Filter, which food_facility to fetch.
     */
    where?: food_facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facilities to fetch.
     */
    orderBy?: food_facilityOrderByWithRelationInput | food_facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_facilities.
     */
    cursor?: food_facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_facilities.
     */
    distinct?: Food_facilityScalarFieldEnum | Food_facilityScalarFieldEnum[]
  }

  /**
   * food_facility findFirstOrThrow
   */
  export type food_facilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * Filter, which food_facility to fetch.
     */
    where?: food_facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facilities to fetch.
     */
    orderBy?: food_facilityOrderByWithRelationInput | food_facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_facilities.
     */
    cursor?: food_facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_facilities.
     */
    distinct?: Food_facilityScalarFieldEnum | Food_facilityScalarFieldEnum[]
  }

  /**
   * food_facility findMany
   */
  export type food_facilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * Filter, which food_facilities to fetch.
     */
    where?: food_facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facilities to fetch.
     */
    orderBy?: food_facilityOrderByWithRelationInput | food_facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing food_facilities.
     */
    cursor?: food_facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facilities.
     */
    skip?: number
    distinct?: Food_facilityScalarFieldEnum | Food_facilityScalarFieldEnum[]
  }

  /**
   * food_facility create
   */
  export type food_facilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * The data needed to create a food_facility.
     */
    data: XOR<food_facilityCreateInput, food_facilityUncheckedCreateInput>
  }

  /**
   * food_facility createMany
   */
  export type food_facilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many food_facilities.
     */
    data: food_facilityCreateManyInput | food_facilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food_facility update
   */
  export type food_facilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * The data needed to update a food_facility.
     */
    data: XOR<food_facilityUpdateInput, food_facilityUncheckedUpdateInput>
    /**
     * Choose, which food_facility to update.
     */
    where: food_facilityWhereUniqueInput
  }

  /**
   * food_facility updateMany
   */
  export type food_facilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update food_facilities.
     */
    data: XOR<food_facilityUpdateManyMutationInput, food_facilityUncheckedUpdateManyInput>
    /**
     * Filter which food_facilities to update
     */
    where?: food_facilityWhereInput
  }

  /**
   * food_facility upsert
   */
  export type food_facilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * The filter to search for the food_facility to update in case it exists.
     */
    where: food_facilityWhereUniqueInput
    /**
     * In case the food_facility found by the `where` argument doesn't exist, create a new food_facility with this data.
     */
    create: XOR<food_facilityCreateInput, food_facilityUncheckedCreateInput>
    /**
     * In case the food_facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<food_facilityUpdateInput, food_facilityUncheckedUpdateInput>
  }

  /**
   * food_facility delete
   */
  export type food_facilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
    /**
     * Filter which food_facility to delete.
     */
    where: food_facilityWhereUniqueInput
  }

  /**
   * food_facility deleteMany
   */
  export type food_facilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_facilities to delete
     */
    where?: food_facilityWhereInput
  }

  /**
   * food_facility.food_facility_personnel
   */
  export type food_facility$food_facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    where?: food_facility_personnelWhereInput
    orderBy?: food_facility_personnelOrderByWithRelationInput | food_facility_personnelOrderByWithRelationInput[]
    cursor?: food_facility_personnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Food_facility_personnelScalarFieldEnum | Food_facility_personnelScalarFieldEnum[]
  }

  /**
   * food_facility without action
   */
  export type food_facilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility
     */
    select?: food_facilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facilityInclude<ExtArgs> | null
  }


  /**
   * Model food_facility_personnel
   */

  export type AggregateFood_facility_personnel = {
    _count: Food_facility_personnelCountAggregateOutputType | null
    _avg: Food_facility_personnelAvgAggregateOutputType | null
    _sum: Food_facility_personnelSumAggregateOutputType | null
    _min: Food_facility_personnelMinAggregateOutputType | null
    _max: Food_facility_personnelMaxAggregateOutputType | null
  }

  export type Food_facility_personnelAvgAggregateOutputType = {
    id: number | null
    food_facility_id: number | null
    food_handler_id: number | null
  }

  export type Food_facility_personnelSumAggregateOutputType = {
    id: number | null
    food_facility_id: number | null
    food_handler_id: number | null
  }

  export type Food_facility_personnelMinAggregateOutputType = {
    id: number | null
    food_facility_id: number | null
    food_handler_id: number | null
    enugu_handler_id: string | null
    createdAt: Date | null
  }

  export type Food_facility_personnelMaxAggregateOutputType = {
    id: number | null
    food_facility_id: number | null
    food_handler_id: number | null
    enugu_handler_id: string | null
    createdAt: Date | null
  }

  export type Food_facility_personnelCountAggregateOutputType = {
    id: number
    food_facility_id: number
    food_handler_id: number
    enugu_handler_id: number
    createdAt: number
    _all: number
  }


  export type Food_facility_personnelAvgAggregateInputType = {
    id?: true
    food_facility_id?: true
    food_handler_id?: true
  }

  export type Food_facility_personnelSumAggregateInputType = {
    id?: true
    food_facility_id?: true
    food_handler_id?: true
  }

  export type Food_facility_personnelMinAggregateInputType = {
    id?: true
    food_facility_id?: true
    food_handler_id?: true
    enugu_handler_id?: true
    createdAt?: true
  }

  export type Food_facility_personnelMaxAggregateInputType = {
    id?: true
    food_facility_id?: true
    food_handler_id?: true
    enugu_handler_id?: true
    createdAt?: true
  }

  export type Food_facility_personnelCountAggregateInputType = {
    id?: true
    food_facility_id?: true
    food_handler_id?: true
    enugu_handler_id?: true
    createdAt?: true
    _all?: true
  }

  export type Food_facility_personnelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_facility_personnel to aggregate.
     */
    where?: food_facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facility_personnels to fetch.
     */
    orderBy?: food_facility_personnelOrderByWithRelationInput | food_facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: food_facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facility_personnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned food_facility_personnels
    **/
    _count?: true | Food_facility_personnelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Food_facility_personnelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Food_facility_personnelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_facility_personnelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_facility_personnelMaxAggregateInputType
  }

  export type GetFood_facility_personnelAggregateType<T extends Food_facility_personnelAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_facility_personnel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_facility_personnel[P]>
      : GetScalarType<T[P], AggregateFood_facility_personnel[P]>
  }




  export type food_facility_personnelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_facility_personnelWhereInput
    orderBy?: food_facility_personnelOrderByWithAggregationInput | food_facility_personnelOrderByWithAggregationInput[]
    by: Food_facility_personnelScalarFieldEnum[] | Food_facility_personnelScalarFieldEnum
    having?: food_facility_personnelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_facility_personnelCountAggregateInputType | true
    _avg?: Food_facility_personnelAvgAggregateInputType
    _sum?: Food_facility_personnelSumAggregateInputType
    _min?: Food_facility_personnelMinAggregateInputType
    _max?: Food_facility_personnelMaxAggregateInputType
  }

  export type Food_facility_personnelGroupByOutputType = {
    id: number
    food_facility_id: number
    food_handler_id: number
    enugu_handler_id: string
    createdAt: Date
    _count: Food_facility_personnelCountAggregateOutputType | null
    _avg: Food_facility_personnelAvgAggregateOutputType | null
    _sum: Food_facility_personnelSumAggregateOutputType | null
    _min: Food_facility_personnelMinAggregateOutputType | null
    _max: Food_facility_personnelMaxAggregateOutputType | null
  }

  type GetFood_facility_personnelGroupByPayload<T extends food_facility_personnelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_facility_personnelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_facility_personnelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_facility_personnelGroupByOutputType[P]>
            : GetScalarType<T[P], Food_facility_personnelGroupByOutputType[P]>
        }
      >
    >


  export type food_facility_personnelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    food_facility_id?: boolean
    food_handler_id?: boolean
    enugu_handler_id?: boolean
    createdAt?: boolean
    food_facility?: boolean | food_facilityDefaultArgs<ExtArgs>
    food_handler?: boolean | food_handlersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food_facility_personnel"]>

  export type food_facility_personnelSelectScalar = {
    id?: boolean
    food_facility_id?: boolean
    food_handler_id?: boolean
    enugu_handler_id?: boolean
    createdAt?: boolean
  }


  export type food_facility_personnelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_facility?: boolean | food_facilityDefaultArgs<ExtArgs>
    food_handler?: boolean | food_handlersDefaultArgs<ExtArgs>
  }


  export type $food_facility_personnelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food_facility_personnel"
    objects: {
      food_facility: Prisma.$food_facilityPayload<ExtArgs>
      food_handler: Prisma.$food_handlersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      food_facility_id: number
      food_handler_id: number
      enugu_handler_id: string
      createdAt: Date
    }, ExtArgs["result"]["food_facility_personnel"]>
    composites: {}
  }


  type food_facility_personnelGetPayload<S extends boolean | null | undefined | food_facility_personnelDefaultArgs> = $Result.GetResult<Prisma.$food_facility_personnelPayload, S>

  type food_facility_personnelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<food_facility_personnelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Food_facility_personnelCountAggregateInputType | true
    }

  export interface food_facility_personnelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food_facility_personnel'], meta: { name: 'food_facility_personnel' } }
    /**
     * Find zero or one Food_facility_personnel that matches the filter.
     * @param {food_facility_personnelFindUniqueArgs} args - Arguments to find a Food_facility_personnel
     * @example
     * // Get one Food_facility_personnel
     * const food_facility_personnel = await prisma.food_facility_personnel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends food_facility_personnelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, food_facility_personnelFindUniqueArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Food_facility_personnel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {food_facility_personnelFindUniqueOrThrowArgs} args - Arguments to find a Food_facility_personnel
     * @example
     * // Get one Food_facility_personnel
     * const food_facility_personnel = await prisma.food_facility_personnel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends food_facility_personnelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facility_personnelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Food_facility_personnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facility_personnelFindFirstArgs} args - Arguments to find a Food_facility_personnel
     * @example
     * // Get one Food_facility_personnel
     * const food_facility_personnel = await prisma.food_facility_personnel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends food_facility_personnelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facility_personnelFindFirstArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Food_facility_personnel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facility_personnelFindFirstOrThrowArgs} args - Arguments to find a Food_facility_personnel
     * @example
     * // Get one Food_facility_personnel
     * const food_facility_personnel = await prisma.food_facility_personnel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends food_facility_personnelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facility_personnelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Food_facility_personnels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facility_personnelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_facility_personnels
     * const food_facility_personnels = await prisma.food_facility_personnel.findMany()
     * 
     * // Get first 10 Food_facility_personnels
     * const food_facility_personnels = await prisma.food_facility_personnel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const food_facility_personnelWithIdOnly = await prisma.food_facility_personnel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends food_facility_personnelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facility_personnelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Food_facility_personnel.
     * @param {food_facility_personnelCreateArgs} args - Arguments to create a Food_facility_personnel.
     * @example
     * // Create one Food_facility_personnel
     * const Food_facility_personnel = await prisma.food_facility_personnel.create({
     *   data: {
     *     // ... data to create a Food_facility_personnel
     *   }
     * })
     * 
    **/
    create<T extends food_facility_personnelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, food_facility_personnelCreateArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Food_facility_personnels.
     *     @param {food_facility_personnelCreateManyArgs} args - Arguments to create many Food_facility_personnels.
     *     @example
     *     // Create many Food_facility_personnels
     *     const food_facility_personnel = await prisma.food_facility_personnel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends food_facility_personnelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facility_personnelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food_facility_personnel.
     * @param {food_facility_personnelDeleteArgs} args - Arguments to delete one Food_facility_personnel.
     * @example
     * // Delete one Food_facility_personnel
     * const Food_facility_personnel = await prisma.food_facility_personnel.delete({
     *   where: {
     *     // ... filter to delete one Food_facility_personnel
     *   }
     * })
     * 
    **/
    delete<T extends food_facility_personnelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, food_facility_personnelDeleteArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Food_facility_personnel.
     * @param {food_facility_personnelUpdateArgs} args - Arguments to update one Food_facility_personnel.
     * @example
     * // Update one Food_facility_personnel
     * const food_facility_personnel = await prisma.food_facility_personnel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends food_facility_personnelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, food_facility_personnelUpdateArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Food_facility_personnels.
     * @param {food_facility_personnelDeleteManyArgs} args - Arguments to filter Food_facility_personnels to delete.
     * @example
     * // Delete a few Food_facility_personnels
     * const { count } = await prisma.food_facility_personnel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends food_facility_personnelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, food_facility_personnelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_facility_personnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facility_personnelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_facility_personnels
     * const food_facility_personnel = await prisma.food_facility_personnel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends food_facility_personnelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, food_facility_personnelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food_facility_personnel.
     * @param {food_facility_personnelUpsertArgs} args - Arguments to update or create a Food_facility_personnel.
     * @example
     * // Update or create a Food_facility_personnel
     * const food_facility_personnel = await prisma.food_facility_personnel.upsert({
     *   create: {
     *     // ... data to create a Food_facility_personnel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_facility_personnel we want to update
     *   }
     * })
    **/
    upsert<T extends food_facility_personnelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, food_facility_personnelUpsertArgs<ExtArgs>>
    ): Prisma__food_facility_personnelClient<$Result.GetResult<Prisma.$food_facility_personnelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Food_facility_personnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facility_personnelCountArgs} args - Arguments to filter Food_facility_personnels to count.
     * @example
     * // Count the number of Food_facility_personnels
     * const count = await prisma.food_facility_personnel.count({
     *   where: {
     *     // ... the filter for the Food_facility_personnels we want to count
     *   }
     * })
    **/
    count<T extends food_facility_personnelCountArgs>(
      args?: Subset<T, food_facility_personnelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_facility_personnelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_facility_personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_facility_personnelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Food_facility_personnelAggregateArgs>(args: Subset<T, Food_facility_personnelAggregateArgs>): Prisma.PrismaPromise<GetFood_facility_personnelAggregateType<T>>

    /**
     * Group by Food_facility_personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_facility_personnelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends food_facility_personnelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: food_facility_personnelGroupByArgs['orderBy'] }
        : { orderBy?: food_facility_personnelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, food_facility_personnelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_facility_personnelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food_facility_personnel model
   */
  readonly fields: food_facility_personnelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food_facility_personnel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__food_facility_personnelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    food_facility<T extends food_facilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, food_facilityDefaultArgs<ExtArgs>>): Prisma__food_facilityClient<$Result.GetResult<Prisma.$food_facilityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    food_handler<T extends food_handlersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, food_handlersDefaultArgs<ExtArgs>>): Prisma__food_handlersClient<$Result.GetResult<Prisma.$food_handlersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the food_facility_personnel model
   */ 
  interface food_facility_personnelFieldRefs {
    readonly id: FieldRef<"food_facility_personnel", 'Int'>
    readonly food_facility_id: FieldRef<"food_facility_personnel", 'Int'>
    readonly food_handler_id: FieldRef<"food_facility_personnel", 'Int'>
    readonly enugu_handler_id: FieldRef<"food_facility_personnel", 'String'>
    readonly createdAt: FieldRef<"food_facility_personnel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * food_facility_personnel findUnique
   */
  export type food_facility_personnelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which food_facility_personnel to fetch.
     */
    where: food_facility_personnelWhereUniqueInput
  }

  /**
   * food_facility_personnel findUniqueOrThrow
   */
  export type food_facility_personnelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which food_facility_personnel to fetch.
     */
    where: food_facility_personnelWhereUniqueInput
  }

  /**
   * food_facility_personnel findFirst
   */
  export type food_facility_personnelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which food_facility_personnel to fetch.
     */
    where?: food_facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facility_personnels to fetch.
     */
    orderBy?: food_facility_personnelOrderByWithRelationInput | food_facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_facility_personnels.
     */
    cursor?: food_facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facility_personnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_facility_personnels.
     */
    distinct?: Food_facility_personnelScalarFieldEnum | Food_facility_personnelScalarFieldEnum[]
  }

  /**
   * food_facility_personnel findFirstOrThrow
   */
  export type food_facility_personnelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which food_facility_personnel to fetch.
     */
    where?: food_facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facility_personnels to fetch.
     */
    orderBy?: food_facility_personnelOrderByWithRelationInput | food_facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_facility_personnels.
     */
    cursor?: food_facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facility_personnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_facility_personnels.
     */
    distinct?: Food_facility_personnelScalarFieldEnum | Food_facility_personnelScalarFieldEnum[]
  }

  /**
   * food_facility_personnel findMany
   */
  export type food_facility_personnelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * Filter, which food_facility_personnels to fetch.
     */
    where?: food_facility_personnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_facility_personnels to fetch.
     */
    orderBy?: food_facility_personnelOrderByWithRelationInput | food_facility_personnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing food_facility_personnels.
     */
    cursor?: food_facility_personnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_facility_personnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_facility_personnels.
     */
    skip?: number
    distinct?: Food_facility_personnelScalarFieldEnum | Food_facility_personnelScalarFieldEnum[]
  }

  /**
   * food_facility_personnel create
   */
  export type food_facility_personnelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * The data needed to create a food_facility_personnel.
     */
    data: XOR<food_facility_personnelCreateInput, food_facility_personnelUncheckedCreateInput>
  }

  /**
   * food_facility_personnel createMany
   */
  export type food_facility_personnelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many food_facility_personnels.
     */
    data: food_facility_personnelCreateManyInput | food_facility_personnelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food_facility_personnel update
   */
  export type food_facility_personnelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * The data needed to update a food_facility_personnel.
     */
    data: XOR<food_facility_personnelUpdateInput, food_facility_personnelUncheckedUpdateInput>
    /**
     * Choose, which food_facility_personnel to update.
     */
    where: food_facility_personnelWhereUniqueInput
  }

  /**
   * food_facility_personnel updateMany
   */
  export type food_facility_personnelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update food_facility_personnels.
     */
    data: XOR<food_facility_personnelUpdateManyMutationInput, food_facility_personnelUncheckedUpdateManyInput>
    /**
     * Filter which food_facility_personnels to update
     */
    where?: food_facility_personnelWhereInput
  }

  /**
   * food_facility_personnel upsert
   */
  export type food_facility_personnelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * The filter to search for the food_facility_personnel to update in case it exists.
     */
    where: food_facility_personnelWhereUniqueInput
    /**
     * In case the food_facility_personnel found by the `where` argument doesn't exist, create a new food_facility_personnel with this data.
     */
    create: XOR<food_facility_personnelCreateInput, food_facility_personnelUncheckedCreateInput>
    /**
     * In case the food_facility_personnel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<food_facility_personnelUpdateInput, food_facility_personnelUncheckedUpdateInput>
  }

  /**
   * food_facility_personnel delete
   */
  export type food_facility_personnelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
    /**
     * Filter which food_facility_personnel to delete.
     */
    where: food_facility_personnelWhereUniqueInput
  }

  /**
   * food_facility_personnel deleteMany
   */
  export type food_facility_personnelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_facility_personnels to delete
     */
    where?: food_facility_personnelWhereInput
  }

  /**
   * food_facility_personnel without action
   */
  export type food_facility_personnelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_facility_personnel
     */
    select?: food_facility_personnelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_facility_personnelInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    reset_password_token: 'reset_password_token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Inspection_reviewScalarFieldEnum: {
    id: 'id',
    facility_id: 'facility_id',
    cac: 'cac',
    owner_nin: 'owner_nin',
    services_offered: 'services_offered',
    number_of_bed: 'number_of_bed',
    source_of_water: 'source_of_water',
    method_of_disposal: 'method_of_disposal',
    site_plan: 'site_plan',
    building_plan: 'building_plan',
    compliance_certificate: 'compliance_certificate',
    tax_clearance_certificate: 'tax_clearance_certificate',
    facility_personnel_count: 'facility_personnel_count',
    facility_personnel: 'facility_personnel',
    review: 'review',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Inspection_reviewScalarFieldEnum = (typeof Inspection_reviewScalarFieldEnum)[keyof typeof Inspection_reviewScalarFieldEnum]


  export const InspectorScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    address: 'address',
    role: 'role',
    lga: 'lga',
    profile_image: 'profile_image',
    password: 'password',
    reset_password_token: 'reset_password_token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InspectorScalarFieldEnum = (typeof InspectorScalarFieldEnum)[keyof typeof InspectorScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const Local_governmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    state_id: 'state_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Local_governmentScalarFieldEnum = (typeof Local_governmentScalarFieldEnum)[keyof typeof Local_governmentScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    address: 'address',
    type: 'type',
    practice_id: 'practice_id',
    practice_certificate: 'practice_certificate',
    enugu_practice_id: 'enugu_practice_id',
    specialization: 'specialization',
    nin: 'nin',
    nin_image: 'nin_image',
    lga: 'lga',
    state: 'state',
    gender: 'gender',
    expiry_date: 'expiry_date',
    nin_status: 'nin_status',
    practice_id_status: 'practice_id_status',
    status: 'status',
    passport: 'passport',
    password: 'password',
    reset_password_token: 'reset_password_token',
    certificate_url: 'certificate_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Food_handlersScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    address: 'address',
    enugu_handler_id: 'enugu_handler_id',
    nin: 'nin',
    nin_image: 'nin_image',
    lga: 'lga',
    state: 'state',
    gender: 'gender',
    expiry_date: 'expiry_date',
    nin_status: 'nin_status',
    status: 'status',
    passport: 'passport',
    password: 'password',
    reset_password_token: 'reset_password_token',
    certificate_url: 'certificate_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Food_handlersScalarFieldEnum = (typeof Food_handlersScalarFieldEnum)[keyof typeof Food_handlersScalarFieldEnum]


  export const Personnel_paymentScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    amount: 'amount',
    reference: 'reference',
    phone_number: 'phone_number',
    type: 'type',
    type_of_payment: 'type_of_payment',
    status: 'status',
    has_registered: 'has_registered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Personnel_paymentScalarFieldEnum = (typeof Personnel_paymentScalarFieldEnum)[keyof typeof Personnel_paymentScalarFieldEnum]


  export const Facility_paymentScalarFieldEnum: {
    id: 'id',
    facility_name: 'facility_name',
    email: 'email',
    amount: 'amount',
    reference: 'reference',
    phone_number: 'phone_number',
    type: 'type',
    type_of_payment: 'type_of_payment',
    status: 'status',
    has_registered: 'has_registered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Facility_paymentScalarFieldEnum = (typeof Facility_paymentScalarFieldEnum)[keyof typeof Facility_paymentScalarFieldEnum]


  export const Facility_complete_paymentScalarFieldEnum: {
    id: 'id',
    facility_name: 'facility_name',
    email: 'email',
    amount: 'amount',
    reference: 'reference',
    phone_number: 'phone_number',
    type: 'type',
    type_of_payment: 'type_of_payment',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Facility_complete_paymentScalarFieldEnum = (typeof Facility_complete_paymentScalarFieldEnum)[keyof typeof Facility_complete_paymentScalarFieldEnum]


  export const RevokedTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type RevokedTokenScalarFieldEnum = (typeof RevokedTokenScalarFieldEnum)[keyof typeof RevokedTokenScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    facility_name: 'facility_name',
    location: 'location',
    cac: 'cac',
    cac_image: 'cac_image',
    owner_name: 'owner_name',
    owner_phone_number: 'owner_phone_number',
    owner_contact_address: 'owner_contact_address',
    owner_nin: 'owner_nin',
    owner_nin_image: 'owner_nin_image',
    owner_passport: 'owner_passport',
    owner_email: 'owner_email',
    owner_gender: 'owner_gender',
    lga: 'lga',
    facility_sector: 'facility_sector',
    facility_type: 'facility_type',
    facility_level: 'facility_level',
    personnel_incharge: 'personnel_incharge',
    personnel_incharge_name: 'personnel_incharge_name',
    personnel_incharge_practice_id: 'personnel_incharge_practice_id',
    supervising_doctor_name: 'supervising_doctor_name',
    supervising_doctor_practice_id: 'supervising_doctor_practice_id',
    services_offered: 'services_offered',
    landmark: 'landmark',
    number_of_bed: 'number_of_bed',
    source_of_water: 'source_of_water',
    method_of_disposal: 'method_of_disposal',
    site_plan: 'site_plan',
    building_plan: 'building_plan',
    tax_clearance_certificate: 'tax_clearance_certificate',
    compliance_certificate: 'compliance_certificate',
    facility_personnel_count: 'facility_personnel_count',
    expiry_date: 'expiry_date',
    enugu_facility_id: 'enugu_facility_id',
    reference: 'reference',
    current_reference: 'current_reference',
    password: 'password',
    reset_password_token: 'reset_password_token',
    assigned_inspector: 'assigned_inspector',
    inspection_date: 'inspection_date',
    is_inspected: 'is_inspected',
    certificate_url: 'certificate_url',
    cac_status: 'cac_status',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const Facility_personnelScalarFieldEnum: {
    id: 'id',
    facility_id: 'facility_id',
    user_id: 'user_id',
    enugu_practice_id: 'enugu_practice_id',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type Facility_personnelScalarFieldEnum = (typeof Facility_personnelScalarFieldEnum)[keyof typeof Facility_personnelScalarFieldEnum]


  export const Food_facilityScalarFieldEnum: {
    id: 'id',
    facility_name: 'facility_name',
    location: 'location',
    cac: 'cac',
    cac_image: 'cac_image',
    owner_name: 'owner_name',
    owner_phone_number: 'owner_phone_number',
    owner_contact_address: 'owner_contact_address',
    owner_nin: 'owner_nin',
    owner_nin_image: 'owner_nin_image',
    owner_email: 'owner_email',
    lga: 'lga',
    landmark: 'landmark',
    source_of_water: 'source_of_water',
    method_of_disposal: 'method_of_disposal',
    category: 'category',
    facility_personnel_count: 'facility_personnel_count',
    expiry_date: 'expiry_date',
    enugu_food_facility_id: 'enugu_food_facility_id',
    reference: 'reference',
    current_reference: 'current_reference',
    password: 'password',
    reset_password_token: 'reset_password_token',
    cac_status: 'cac_status',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Food_facilityScalarFieldEnum = (typeof Food_facilityScalarFieldEnum)[keyof typeof Food_facilityScalarFieldEnum]


  export const Food_facility_personnelScalarFieldEnum: {
    id: 'id',
    food_facility_id: 'food_facility_id',
    food_handler_id: 'food_handler_id',
    enugu_handler_id: 'enugu_handler_id',
    createdAt: 'createdAt'
  };

  export type Food_facility_personnelScalarFieldEnum = (typeof Food_facility_personnelScalarFieldEnum)[keyof typeof Food_facility_personnelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Sector'
   */
  export type EnumSectorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sector'>
    


  /**
   * Reference to a field of type 'Sector[]'
   */
  export type ListEnumSectorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sector[]'>
    


  /**
   * Reference to a field of type 'Facility_Type'
   */
  export type EnumFacility_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Facility_Type'>
    


  /**
   * Reference to a field of type 'Facility_Type[]'
   */
  export type ListEnumFacility_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Facility_Type[]'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    fullname?: StringFilter<"admin"> | string
    username?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    profile_image?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    reset_password_token?: StringNullableFilter<"admin"> | string | null
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    reset_password_token?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    fullname?: StringFilter<"admin"> | string
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    profile_image?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "username" | "email" | "reset_password_token">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    fullname?: StringWithAggregatesFilter<"admin"> | string
    username?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    role?: EnumRoleWithAggregatesFilter<"admin"> | $Enums.Role
    profile_image?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    reset_password_token?: StringNullableWithAggregatesFilter<"admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type inspection_reviewWhereInput = {
    AND?: inspection_reviewWhereInput | inspection_reviewWhereInput[]
    OR?: inspection_reviewWhereInput[]
    NOT?: inspection_reviewWhereInput | inspection_reviewWhereInput[]
    id?: IntFilter<"inspection_review"> | number
    facility_id?: IntFilter<"inspection_review"> | number
    cac?: BoolFilter<"inspection_review"> | boolean
    owner_nin?: BoolFilter<"inspection_review"> | boolean
    services_offered?: BoolFilter<"inspection_review"> | boolean
    number_of_bed?: BoolFilter<"inspection_review"> | boolean
    source_of_water?: BoolFilter<"inspection_review"> | boolean
    method_of_disposal?: BoolFilter<"inspection_review"> | boolean
    site_plan?: BoolFilter<"inspection_review"> | boolean
    building_plan?: BoolFilter<"inspection_review"> | boolean
    compliance_certificate?: BoolNullableFilter<"inspection_review"> | boolean | null
    tax_clearance_certificate?: BoolFilter<"inspection_review"> | boolean
    facility_personnel_count?: BoolFilter<"inspection_review"> | boolean
    facility_personnel?: BoolFilter<"inspection_review"> | boolean
    review?: StringFilter<"inspection_review"> | string
    status?: EnumStatusFilter<"inspection_review"> | $Enums.Status
    createdAt?: DateTimeFilter<"inspection_review"> | Date | string
    updatedAt?: DateTimeFilter<"inspection_review"> | Date | string
    facility?: XOR<FacilityRelationFilter, facilityWhereInput>
  }

  export type inspection_reviewOrderByWithRelationInput = {
    id?: SortOrder
    facility_id?: SortOrder
    cac?: SortOrder
    owner_nin?: SortOrder
    services_offered?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    compliance_certificate?: SortOrderInput | SortOrder
    tax_clearance_certificate?: SortOrder
    facility_personnel_count?: SortOrder
    facility_personnel?: SortOrder
    review?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facility?: facilityOrderByWithRelationInput
  }

  export type inspection_reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    facility_id?: number
    AND?: inspection_reviewWhereInput | inspection_reviewWhereInput[]
    OR?: inspection_reviewWhereInput[]
    NOT?: inspection_reviewWhereInput | inspection_reviewWhereInput[]
    cac?: BoolFilter<"inspection_review"> | boolean
    owner_nin?: BoolFilter<"inspection_review"> | boolean
    services_offered?: BoolFilter<"inspection_review"> | boolean
    number_of_bed?: BoolFilter<"inspection_review"> | boolean
    source_of_water?: BoolFilter<"inspection_review"> | boolean
    method_of_disposal?: BoolFilter<"inspection_review"> | boolean
    site_plan?: BoolFilter<"inspection_review"> | boolean
    building_plan?: BoolFilter<"inspection_review"> | boolean
    compliance_certificate?: BoolNullableFilter<"inspection_review"> | boolean | null
    tax_clearance_certificate?: BoolFilter<"inspection_review"> | boolean
    facility_personnel_count?: BoolFilter<"inspection_review"> | boolean
    facility_personnel?: BoolFilter<"inspection_review"> | boolean
    review?: StringFilter<"inspection_review"> | string
    status?: EnumStatusFilter<"inspection_review"> | $Enums.Status
    createdAt?: DateTimeFilter<"inspection_review"> | Date | string
    updatedAt?: DateTimeFilter<"inspection_review"> | Date | string
    facility?: XOR<FacilityRelationFilter, facilityWhereInput>
  }, "id" | "facility_id">

  export type inspection_reviewOrderByWithAggregationInput = {
    id?: SortOrder
    facility_id?: SortOrder
    cac?: SortOrder
    owner_nin?: SortOrder
    services_offered?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    compliance_certificate?: SortOrderInput | SortOrder
    tax_clearance_certificate?: SortOrder
    facility_personnel_count?: SortOrder
    facility_personnel?: SortOrder
    review?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: inspection_reviewCountOrderByAggregateInput
    _avg?: inspection_reviewAvgOrderByAggregateInput
    _max?: inspection_reviewMaxOrderByAggregateInput
    _min?: inspection_reviewMinOrderByAggregateInput
    _sum?: inspection_reviewSumOrderByAggregateInput
  }

  export type inspection_reviewScalarWhereWithAggregatesInput = {
    AND?: inspection_reviewScalarWhereWithAggregatesInput | inspection_reviewScalarWhereWithAggregatesInput[]
    OR?: inspection_reviewScalarWhereWithAggregatesInput[]
    NOT?: inspection_reviewScalarWhereWithAggregatesInput | inspection_reviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inspection_review"> | number
    facility_id?: IntWithAggregatesFilter<"inspection_review"> | number
    cac?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    owner_nin?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    services_offered?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    number_of_bed?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    source_of_water?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    method_of_disposal?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    site_plan?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    building_plan?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    compliance_certificate?: BoolNullableWithAggregatesFilter<"inspection_review"> | boolean | null
    tax_clearance_certificate?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    facility_personnel_count?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    facility_personnel?: BoolWithAggregatesFilter<"inspection_review"> | boolean
    review?: StringWithAggregatesFilter<"inspection_review"> | string
    status?: EnumStatusWithAggregatesFilter<"inspection_review"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"inspection_review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"inspection_review"> | Date | string
  }

  export type inspectorWhereInput = {
    AND?: inspectorWhereInput | inspectorWhereInput[]
    OR?: inspectorWhereInput[]
    NOT?: inspectorWhereInput | inspectorWhereInput[]
    id?: IntFilter<"inspector"> | number
    fullname?: StringFilter<"inspector"> | string
    username?: StringFilter<"inspector"> | string
    email?: StringFilter<"inspector"> | string
    phone_number?: StringFilter<"inspector"> | string
    address?: StringFilter<"inspector"> | string
    role?: EnumRoleFilter<"inspector"> | $Enums.Role
    lga?: StringNullableFilter<"inspector"> | string | null
    profile_image?: StringFilter<"inspector"> | string
    password?: StringFilter<"inspector"> | string
    reset_password_token?: StringNullableFilter<"inspector"> | string | null
    createdAt?: DateTimeFilter<"inspector"> | Date | string
    updatedAt?: DateTimeFilter<"inspector"> | Date | string
    facility?: FacilityListRelationFilter
  }

  export type inspectorOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    lga?: SortOrderInput | SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facility?: facilityOrderByRelationAggregateInput
  }

  export type inspectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    reset_password_token?: string
    AND?: inspectorWhereInput | inspectorWhereInput[]
    OR?: inspectorWhereInput[]
    NOT?: inspectorWhereInput | inspectorWhereInput[]
    fullname?: StringFilter<"inspector"> | string
    phone_number?: StringFilter<"inspector"> | string
    address?: StringFilter<"inspector"> | string
    role?: EnumRoleFilter<"inspector"> | $Enums.Role
    lga?: StringNullableFilter<"inspector"> | string | null
    profile_image?: StringFilter<"inspector"> | string
    password?: StringFilter<"inspector"> | string
    createdAt?: DateTimeFilter<"inspector"> | Date | string
    updatedAt?: DateTimeFilter<"inspector"> | Date | string
    facility?: FacilityListRelationFilter
  }, "id" | "username" | "email" | "reset_password_token">

  export type inspectorOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    lga?: SortOrderInput | SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: inspectorCountOrderByAggregateInput
    _avg?: inspectorAvgOrderByAggregateInput
    _max?: inspectorMaxOrderByAggregateInput
    _min?: inspectorMinOrderByAggregateInput
    _sum?: inspectorSumOrderByAggregateInput
  }

  export type inspectorScalarWhereWithAggregatesInput = {
    AND?: inspectorScalarWhereWithAggregatesInput | inspectorScalarWhereWithAggregatesInput[]
    OR?: inspectorScalarWhereWithAggregatesInput[]
    NOT?: inspectorScalarWhereWithAggregatesInput | inspectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inspector"> | number
    fullname?: StringWithAggregatesFilter<"inspector"> | string
    username?: StringWithAggregatesFilter<"inspector"> | string
    email?: StringWithAggregatesFilter<"inspector"> | string
    phone_number?: StringWithAggregatesFilter<"inspector"> | string
    address?: StringWithAggregatesFilter<"inspector"> | string
    role?: EnumRoleWithAggregatesFilter<"inspector"> | $Enums.Role
    lga?: StringNullableWithAggregatesFilter<"inspector"> | string | null
    profile_image?: StringWithAggregatesFilter<"inspector"> | string
    password?: StringWithAggregatesFilter<"inspector"> | string
    reset_password_token?: StringNullableWithAggregatesFilter<"inspector"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"inspector"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"inspector"> | Date | string
  }

  export type stateWhereInput = {
    AND?: stateWhereInput | stateWhereInput[]
    OR?: stateWhereInput[]
    NOT?: stateWhereInput | stateWhereInput[]
    id?: IntFilter<"state"> | number
    name?: StringFilter<"state"> | string
    createdAt?: DateTimeFilter<"state"> | Date | string
    updatedAt?: DateTimeFilter<"state"> | Date | string
    local_government?: Local_governmentListRelationFilter
  }

  export type stateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    local_government?: local_governmentOrderByRelationAggregateInput
  }

  export type stateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stateWhereInput | stateWhereInput[]
    OR?: stateWhereInput[]
    NOT?: stateWhereInput | stateWhereInput[]
    name?: StringFilter<"state"> | string
    createdAt?: DateTimeFilter<"state"> | Date | string
    updatedAt?: DateTimeFilter<"state"> | Date | string
    local_government?: Local_governmentListRelationFilter
  }, "id">

  export type stateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: stateCountOrderByAggregateInput
    _avg?: stateAvgOrderByAggregateInput
    _max?: stateMaxOrderByAggregateInput
    _min?: stateMinOrderByAggregateInput
    _sum?: stateSumOrderByAggregateInput
  }

  export type stateScalarWhereWithAggregatesInput = {
    AND?: stateScalarWhereWithAggregatesInput | stateScalarWhereWithAggregatesInput[]
    OR?: stateScalarWhereWithAggregatesInput[]
    NOT?: stateScalarWhereWithAggregatesInput | stateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"state"> | number
    name?: StringWithAggregatesFilter<"state"> | string
    createdAt?: DateTimeWithAggregatesFilter<"state"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"state"> | Date | string
  }

  export type local_governmentWhereInput = {
    AND?: local_governmentWhereInput | local_governmentWhereInput[]
    OR?: local_governmentWhereInput[]
    NOT?: local_governmentWhereInput | local_governmentWhereInput[]
    id?: IntFilter<"local_government"> | number
    name?: StringFilter<"local_government"> | string
    state_id?: IntFilter<"local_government"> | number
    createdAt?: DateTimeFilter<"local_government"> | Date | string
    updatedAt?: DateTimeFilter<"local_government"> | Date | string
    state?: XOR<StateRelationFilter, stateWhereInput>
  }

  export type local_governmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    state_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: stateOrderByWithRelationInput
  }

  export type local_governmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: local_governmentWhereInput | local_governmentWhereInput[]
    OR?: local_governmentWhereInput[]
    NOT?: local_governmentWhereInput | local_governmentWhereInput[]
    name?: StringFilter<"local_government"> | string
    state_id?: IntFilter<"local_government"> | number
    createdAt?: DateTimeFilter<"local_government"> | Date | string
    updatedAt?: DateTimeFilter<"local_government"> | Date | string
    state?: XOR<StateRelationFilter, stateWhereInput>
  }, "id">

  export type local_governmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    state_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: local_governmentCountOrderByAggregateInput
    _avg?: local_governmentAvgOrderByAggregateInput
    _max?: local_governmentMaxOrderByAggregateInput
    _min?: local_governmentMinOrderByAggregateInput
    _sum?: local_governmentSumOrderByAggregateInput
  }

  export type local_governmentScalarWhereWithAggregatesInput = {
    AND?: local_governmentScalarWhereWithAggregatesInput | local_governmentScalarWhereWithAggregatesInput[]
    OR?: local_governmentScalarWhereWithAggregatesInput[]
    NOT?: local_governmentScalarWhereWithAggregatesInput | local_governmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"local_government"> | number
    name?: StringWithAggregatesFilter<"local_government"> | string
    state_id?: IntWithAggregatesFilter<"local_government"> | number
    createdAt?: DateTimeWithAggregatesFilter<"local_government"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"local_government"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    fullname?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    address?: StringFilter<"users"> | string
    type?: EnumTypeFilter<"users"> | $Enums.Type
    practice_id?: StringFilter<"users"> | string
    practice_certificate?: StringNullableFilter<"users"> | string | null
    enugu_practice_id?: StringFilter<"users"> | string
    specialization?: StringNullableFilter<"users"> | string | null
    nin?: StringFilter<"users"> | string
    nin_image?: StringNullableFilter<"users"> | string | null
    lga?: StringNullableFilter<"users"> | string | null
    state?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    expiry_date?: StringFilter<"users"> | string
    nin_status?: EnumStatusFilter<"users"> | $Enums.Status
    practice_id_status?: EnumStatusFilter<"users"> | $Enums.Status
    status?: EnumStatusFilter<"users"> | $Enums.Status
    passport?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    reset_password_token?: StringNullableFilter<"users"> | string | null
    certificate_url?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    facility_personnel?: Facility_personnelListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    type?: SortOrder
    practice_id?: SortOrder
    practice_certificate?: SortOrderInput | SortOrder
    enugu_practice_id?: SortOrder
    specialization?: SortOrderInput | SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    practice_id_status?: SortOrder
    status?: SortOrder
    passport?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    certificate_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facility_personnel?: facility_personnelOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    practice_id?: string
    enugu_practice_id?: string
    nin?: string
    reset_password_token?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    fullname?: StringFilter<"users"> | string
    address?: StringFilter<"users"> | string
    type?: EnumTypeFilter<"users"> | $Enums.Type
    practice_certificate?: StringNullableFilter<"users"> | string | null
    specialization?: StringNullableFilter<"users"> | string | null
    nin_image?: StringNullableFilter<"users"> | string | null
    lga?: StringNullableFilter<"users"> | string | null
    state?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    expiry_date?: StringFilter<"users"> | string
    nin_status?: EnumStatusFilter<"users"> | $Enums.Status
    practice_id_status?: EnumStatusFilter<"users"> | $Enums.Status
    status?: EnumStatusFilter<"users"> | $Enums.Status
    passport?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    certificate_url?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    facility_personnel?: Facility_personnelListRelationFilter
  }, "id" | "email" | "phone_number" | "practice_id" | "enugu_practice_id" | "nin" | "reset_password_token">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    type?: SortOrder
    practice_id?: SortOrder
    practice_certificate?: SortOrderInput | SortOrder
    enugu_practice_id?: SortOrder
    specialization?: SortOrderInput | SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    practice_id_status?: SortOrder
    status?: SortOrder
    passport?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    certificate_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    fullname?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringWithAggregatesFilter<"users"> | string
    address?: StringWithAggregatesFilter<"users"> | string
    type?: EnumTypeWithAggregatesFilter<"users"> | $Enums.Type
    practice_id?: StringWithAggregatesFilter<"users"> | string
    practice_certificate?: StringNullableWithAggregatesFilter<"users"> | string | null
    enugu_practice_id?: StringWithAggregatesFilter<"users"> | string
    specialization?: StringNullableWithAggregatesFilter<"users"> | string | null
    nin?: StringWithAggregatesFilter<"users"> | string
    nin_image?: StringNullableWithAggregatesFilter<"users"> | string | null
    lga?: StringNullableWithAggregatesFilter<"users"> | string | null
    state?: StringNullableWithAggregatesFilter<"users"> | string | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    expiry_date?: StringWithAggregatesFilter<"users"> | string
    nin_status?: EnumStatusWithAggregatesFilter<"users"> | $Enums.Status
    practice_id_status?: EnumStatusWithAggregatesFilter<"users"> | $Enums.Status
    status?: EnumStatusWithAggregatesFilter<"users"> | $Enums.Status
    passport?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    reset_password_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    certificate_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type food_handlersWhereInput = {
    AND?: food_handlersWhereInput | food_handlersWhereInput[]
    OR?: food_handlersWhereInput[]
    NOT?: food_handlersWhereInput | food_handlersWhereInput[]
    id?: IntFilter<"food_handlers"> | number
    fullname?: StringFilter<"food_handlers"> | string
    email?: StringFilter<"food_handlers"> | string
    phone_number?: StringFilter<"food_handlers"> | string
    address?: StringFilter<"food_handlers"> | string
    enugu_handler_id?: StringFilter<"food_handlers"> | string
    nin?: StringFilter<"food_handlers"> | string
    nin_image?: StringNullableFilter<"food_handlers"> | string | null
    lga?: StringNullableFilter<"food_handlers"> | string | null
    state?: StringNullableFilter<"food_handlers"> | string | null
    gender?: StringNullableFilter<"food_handlers"> | string | null
    expiry_date?: StringFilter<"food_handlers"> | string
    nin_status?: EnumStatusFilter<"food_handlers"> | $Enums.Status
    status?: EnumStatusFilter<"food_handlers"> | $Enums.Status
    passport?: StringNullableFilter<"food_handlers"> | string | null
    password?: StringNullableFilter<"food_handlers"> | string | null
    reset_password_token?: StringNullableFilter<"food_handlers"> | string | null
    certificate_url?: StringNullableFilter<"food_handlers"> | string | null
    createdAt?: DateTimeFilter<"food_handlers"> | Date | string
    updatedAt?: DateTimeFilter<"food_handlers"> | Date | string
    food_facility_personnel?: Food_facility_personnelListRelationFilter
  }

  export type food_handlersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    enugu_handler_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    status?: SortOrder
    passport?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    certificate_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food_facility_personnel?: food_facility_personnelOrderByRelationAggregateInput
  }

  export type food_handlersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    enugu_handler_id?: string
    nin?: string
    reset_password_token?: string
    AND?: food_handlersWhereInput | food_handlersWhereInput[]
    OR?: food_handlersWhereInput[]
    NOT?: food_handlersWhereInput | food_handlersWhereInput[]
    fullname?: StringFilter<"food_handlers"> | string
    address?: StringFilter<"food_handlers"> | string
    nin_image?: StringNullableFilter<"food_handlers"> | string | null
    lga?: StringNullableFilter<"food_handlers"> | string | null
    state?: StringNullableFilter<"food_handlers"> | string | null
    gender?: StringNullableFilter<"food_handlers"> | string | null
    expiry_date?: StringFilter<"food_handlers"> | string
    nin_status?: EnumStatusFilter<"food_handlers"> | $Enums.Status
    status?: EnumStatusFilter<"food_handlers"> | $Enums.Status
    passport?: StringNullableFilter<"food_handlers"> | string | null
    password?: StringNullableFilter<"food_handlers"> | string | null
    certificate_url?: StringNullableFilter<"food_handlers"> | string | null
    createdAt?: DateTimeFilter<"food_handlers"> | Date | string
    updatedAt?: DateTimeFilter<"food_handlers"> | Date | string
    food_facility_personnel?: Food_facility_personnelListRelationFilter
  }, "id" | "email" | "phone_number" | "enugu_handler_id" | "nin" | "reset_password_token">

  export type food_handlersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    enugu_handler_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    status?: SortOrder
    passport?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    certificate_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: food_handlersCountOrderByAggregateInput
    _avg?: food_handlersAvgOrderByAggregateInput
    _max?: food_handlersMaxOrderByAggregateInput
    _min?: food_handlersMinOrderByAggregateInput
    _sum?: food_handlersSumOrderByAggregateInput
  }

  export type food_handlersScalarWhereWithAggregatesInput = {
    AND?: food_handlersScalarWhereWithAggregatesInput | food_handlersScalarWhereWithAggregatesInput[]
    OR?: food_handlersScalarWhereWithAggregatesInput[]
    NOT?: food_handlersScalarWhereWithAggregatesInput | food_handlersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"food_handlers"> | number
    fullname?: StringWithAggregatesFilter<"food_handlers"> | string
    email?: StringWithAggregatesFilter<"food_handlers"> | string
    phone_number?: StringWithAggregatesFilter<"food_handlers"> | string
    address?: StringWithAggregatesFilter<"food_handlers"> | string
    enugu_handler_id?: StringWithAggregatesFilter<"food_handlers"> | string
    nin?: StringWithAggregatesFilter<"food_handlers"> | string
    nin_image?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    lga?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    state?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    gender?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    expiry_date?: StringWithAggregatesFilter<"food_handlers"> | string
    nin_status?: EnumStatusWithAggregatesFilter<"food_handlers"> | $Enums.Status
    status?: EnumStatusWithAggregatesFilter<"food_handlers"> | $Enums.Status
    passport?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    password?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    reset_password_token?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    certificate_url?: StringNullableWithAggregatesFilter<"food_handlers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"food_handlers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"food_handlers"> | Date | string
  }

  export type personnel_paymentWhereInput = {
    AND?: personnel_paymentWhereInput | personnel_paymentWhereInput[]
    OR?: personnel_paymentWhereInput[]
    NOT?: personnel_paymentWhereInput | personnel_paymentWhereInput[]
    id?: IntFilter<"personnel_payment"> | number
    fullname?: StringFilter<"personnel_payment"> | string
    email?: StringFilter<"personnel_payment"> | string
    amount?: StringFilter<"personnel_payment"> | string
    reference?: StringFilter<"personnel_payment"> | string
    phone_number?: StringFilter<"personnel_payment"> | string
    type?: StringFilter<"personnel_payment"> | string
    type_of_payment?: StringNullableFilter<"personnel_payment"> | string | null
    status?: StringFilter<"personnel_payment"> | string
    has_registered?: BoolFilter<"personnel_payment"> | boolean
    createdAt?: DateTimeFilter<"personnel_payment"> | Date | string
    updatedAt?: DateTimeFilter<"personnel_payment"> | Date | string
  }

  export type personnel_paymentOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrderInput | SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type personnel_paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: personnel_paymentWhereInput | personnel_paymentWhereInput[]
    OR?: personnel_paymentWhereInput[]
    NOT?: personnel_paymentWhereInput | personnel_paymentWhereInput[]
    fullname?: StringFilter<"personnel_payment"> | string
    email?: StringFilter<"personnel_payment"> | string
    amount?: StringFilter<"personnel_payment"> | string
    phone_number?: StringFilter<"personnel_payment"> | string
    type?: StringFilter<"personnel_payment"> | string
    type_of_payment?: StringNullableFilter<"personnel_payment"> | string | null
    status?: StringFilter<"personnel_payment"> | string
    has_registered?: BoolFilter<"personnel_payment"> | boolean
    createdAt?: DateTimeFilter<"personnel_payment"> | Date | string
    updatedAt?: DateTimeFilter<"personnel_payment"> | Date | string
  }, "id" | "reference">

  export type personnel_paymentOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrderInput | SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: personnel_paymentCountOrderByAggregateInput
    _avg?: personnel_paymentAvgOrderByAggregateInput
    _max?: personnel_paymentMaxOrderByAggregateInput
    _min?: personnel_paymentMinOrderByAggregateInput
    _sum?: personnel_paymentSumOrderByAggregateInput
  }

  export type personnel_paymentScalarWhereWithAggregatesInput = {
    AND?: personnel_paymentScalarWhereWithAggregatesInput | personnel_paymentScalarWhereWithAggregatesInput[]
    OR?: personnel_paymentScalarWhereWithAggregatesInput[]
    NOT?: personnel_paymentScalarWhereWithAggregatesInput | personnel_paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"personnel_payment"> | number
    fullname?: StringWithAggregatesFilter<"personnel_payment"> | string
    email?: StringWithAggregatesFilter<"personnel_payment"> | string
    amount?: StringWithAggregatesFilter<"personnel_payment"> | string
    reference?: StringWithAggregatesFilter<"personnel_payment"> | string
    phone_number?: StringWithAggregatesFilter<"personnel_payment"> | string
    type?: StringWithAggregatesFilter<"personnel_payment"> | string
    type_of_payment?: StringNullableWithAggregatesFilter<"personnel_payment"> | string | null
    status?: StringWithAggregatesFilter<"personnel_payment"> | string
    has_registered?: BoolWithAggregatesFilter<"personnel_payment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"personnel_payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"personnel_payment"> | Date | string
  }

  export type facility_paymentWhereInput = {
    AND?: facility_paymentWhereInput | facility_paymentWhereInput[]
    OR?: facility_paymentWhereInput[]
    NOT?: facility_paymentWhereInput | facility_paymentWhereInput[]
    id?: IntFilter<"facility_payment"> | number
    facility_name?: StringFilter<"facility_payment"> | string
    email?: StringFilter<"facility_payment"> | string
    amount?: StringFilter<"facility_payment"> | string
    reference?: StringFilter<"facility_payment"> | string
    phone_number?: StringFilter<"facility_payment"> | string
    type?: StringFilter<"facility_payment"> | string
    type_of_payment?: StringNullableFilter<"facility_payment"> | string | null
    status?: StringFilter<"facility_payment"> | string
    has_registered?: BoolFilter<"facility_payment"> | boolean
    createdAt?: DateTimeFilter<"facility_payment"> | Date | string
    updatedAt?: DateTimeFilter<"facility_payment"> | Date | string
  }

  export type facility_paymentOrderByWithRelationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrderInput | SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: facility_paymentWhereInput | facility_paymentWhereInput[]
    OR?: facility_paymentWhereInput[]
    NOT?: facility_paymentWhereInput | facility_paymentWhereInput[]
    facility_name?: StringFilter<"facility_payment"> | string
    email?: StringFilter<"facility_payment"> | string
    amount?: StringFilter<"facility_payment"> | string
    phone_number?: StringFilter<"facility_payment"> | string
    type?: StringFilter<"facility_payment"> | string
    type_of_payment?: StringNullableFilter<"facility_payment"> | string | null
    status?: StringFilter<"facility_payment"> | string
    has_registered?: BoolFilter<"facility_payment"> | boolean
    createdAt?: DateTimeFilter<"facility_payment"> | Date | string
    updatedAt?: DateTimeFilter<"facility_payment"> | Date | string
  }, "id" | "reference">

  export type facility_paymentOrderByWithAggregationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrderInput | SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: facility_paymentCountOrderByAggregateInput
    _avg?: facility_paymentAvgOrderByAggregateInput
    _max?: facility_paymentMaxOrderByAggregateInput
    _min?: facility_paymentMinOrderByAggregateInput
    _sum?: facility_paymentSumOrderByAggregateInput
  }

  export type facility_paymentScalarWhereWithAggregatesInput = {
    AND?: facility_paymentScalarWhereWithAggregatesInput | facility_paymentScalarWhereWithAggregatesInput[]
    OR?: facility_paymentScalarWhereWithAggregatesInput[]
    NOT?: facility_paymentScalarWhereWithAggregatesInput | facility_paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facility_payment"> | number
    facility_name?: StringWithAggregatesFilter<"facility_payment"> | string
    email?: StringWithAggregatesFilter<"facility_payment"> | string
    amount?: StringWithAggregatesFilter<"facility_payment"> | string
    reference?: StringWithAggregatesFilter<"facility_payment"> | string
    phone_number?: StringWithAggregatesFilter<"facility_payment"> | string
    type?: StringWithAggregatesFilter<"facility_payment"> | string
    type_of_payment?: StringNullableWithAggregatesFilter<"facility_payment"> | string | null
    status?: StringWithAggregatesFilter<"facility_payment"> | string
    has_registered?: BoolWithAggregatesFilter<"facility_payment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"facility_payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"facility_payment"> | Date | string
  }

  export type facility_complete_paymentWhereInput = {
    AND?: facility_complete_paymentWhereInput | facility_complete_paymentWhereInput[]
    OR?: facility_complete_paymentWhereInput[]
    NOT?: facility_complete_paymentWhereInput | facility_complete_paymentWhereInput[]
    id?: IntFilter<"facility_complete_payment"> | number
    facility_name?: StringFilter<"facility_complete_payment"> | string
    email?: StringFilter<"facility_complete_payment"> | string
    amount?: StringFilter<"facility_complete_payment"> | string
    reference?: StringFilter<"facility_complete_payment"> | string
    phone_number?: StringFilter<"facility_complete_payment"> | string
    type?: StringFilter<"facility_complete_payment"> | string
    type_of_payment?: StringNullableFilter<"facility_complete_payment"> | string | null
    status?: StringFilter<"facility_complete_payment"> | string
    createdAt?: DateTimeFilter<"facility_complete_payment"> | Date | string
    updatedAt?: DateTimeFilter<"facility_complete_payment"> | Date | string
  }

  export type facility_complete_paymentOrderByWithRelationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_complete_paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: facility_complete_paymentWhereInput | facility_complete_paymentWhereInput[]
    OR?: facility_complete_paymentWhereInput[]
    NOT?: facility_complete_paymentWhereInput | facility_complete_paymentWhereInput[]
    facility_name?: StringFilter<"facility_complete_payment"> | string
    email?: StringFilter<"facility_complete_payment"> | string
    amount?: StringFilter<"facility_complete_payment"> | string
    phone_number?: StringFilter<"facility_complete_payment"> | string
    type?: StringFilter<"facility_complete_payment"> | string
    type_of_payment?: StringNullableFilter<"facility_complete_payment"> | string | null
    status?: StringFilter<"facility_complete_payment"> | string
    createdAt?: DateTimeFilter<"facility_complete_payment"> | Date | string
    updatedAt?: DateTimeFilter<"facility_complete_payment"> | Date | string
  }, "id" | "reference">

  export type facility_complete_paymentOrderByWithAggregationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: facility_complete_paymentCountOrderByAggregateInput
    _avg?: facility_complete_paymentAvgOrderByAggregateInput
    _max?: facility_complete_paymentMaxOrderByAggregateInput
    _min?: facility_complete_paymentMinOrderByAggregateInput
    _sum?: facility_complete_paymentSumOrderByAggregateInput
  }

  export type facility_complete_paymentScalarWhereWithAggregatesInput = {
    AND?: facility_complete_paymentScalarWhereWithAggregatesInput | facility_complete_paymentScalarWhereWithAggregatesInput[]
    OR?: facility_complete_paymentScalarWhereWithAggregatesInput[]
    NOT?: facility_complete_paymentScalarWhereWithAggregatesInput | facility_complete_paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facility_complete_payment"> | number
    facility_name?: StringWithAggregatesFilter<"facility_complete_payment"> | string
    email?: StringWithAggregatesFilter<"facility_complete_payment"> | string
    amount?: StringWithAggregatesFilter<"facility_complete_payment"> | string
    reference?: StringWithAggregatesFilter<"facility_complete_payment"> | string
    phone_number?: StringWithAggregatesFilter<"facility_complete_payment"> | string
    type?: StringWithAggregatesFilter<"facility_complete_payment"> | string
    type_of_payment?: StringNullableWithAggregatesFilter<"facility_complete_payment"> | string | null
    status?: StringWithAggregatesFilter<"facility_complete_payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"facility_complete_payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"facility_complete_payment"> | Date | string
  }

  export type revokedTokenWhereInput = {
    AND?: revokedTokenWhereInput | revokedTokenWhereInput[]
    OR?: revokedTokenWhereInput[]
    NOT?: revokedTokenWhereInput | revokedTokenWhereInput[]
    id?: IntFilter<"revokedToken"> | number
    token?: StringFilter<"revokedToken"> | string
    createdAt?: DateTimeFilter<"revokedToken"> | Date | string
  }

  export type revokedTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type revokedTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: revokedTokenWhereInput | revokedTokenWhereInput[]
    OR?: revokedTokenWhereInput[]
    NOT?: revokedTokenWhereInput | revokedTokenWhereInput[]
    createdAt?: DateTimeFilter<"revokedToken"> | Date | string
  }, "id" | "token">

  export type revokedTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    _count?: revokedTokenCountOrderByAggregateInput
    _avg?: revokedTokenAvgOrderByAggregateInput
    _max?: revokedTokenMaxOrderByAggregateInput
    _min?: revokedTokenMinOrderByAggregateInput
    _sum?: revokedTokenSumOrderByAggregateInput
  }

  export type revokedTokenScalarWhereWithAggregatesInput = {
    AND?: revokedTokenScalarWhereWithAggregatesInput | revokedTokenScalarWhereWithAggregatesInput[]
    OR?: revokedTokenScalarWhereWithAggregatesInput[]
    NOT?: revokedTokenScalarWhereWithAggregatesInput | revokedTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"revokedToken"> | number
    token?: StringWithAggregatesFilter<"revokedToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"revokedToken"> | Date | string
  }

  export type facilityWhereInput = {
    AND?: facilityWhereInput | facilityWhereInput[]
    OR?: facilityWhereInput[]
    NOT?: facilityWhereInput | facilityWhereInput[]
    id?: IntFilter<"facility"> | number
    facility_name?: StringFilter<"facility"> | string
    location?: StringFilter<"facility"> | string
    cac?: StringFilter<"facility"> | string
    cac_image?: StringNullableFilter<"facility"> | string | null
    owner_name?: StringFilter<"facility"> | string
    owner_phone_number?: StringFilter<"facility"> | string
    owner_contact_address?: StringFilter<"facility"> | string
    owner_nin?: StringFilter<"facility"> | string
    owner_nin_image?: StringNullableFilter<"facility"> | string | null
    owner_passport?: StringNullableFilter<"facility"> | string | null
    owner_email?: StringFilter<"facility"> | string
    owner_gender?: StringNullableFilter<"facility"> | string | null
    lga?: StringNullableFilter<"facility"> | string | null
    facility_sector?: EnumSectorFilter<"facility"> | $Enums.Sector
    facility_type?: EnumFacility_TypeFilter<"facility"> | $Enums.Facility_Type
    facility_level?: EnumLevelFilter<"facility"> | $Enums.Level
    personnel_incharge?: StringNullableFilter<"facility"> | string | null
    personnel_incharge_name?: StringNullableFilter<"facility"> | string | null
    personnel_incharge_practice_id?: StringNullableFilter<"facility"> | string | null
    supervising_doctor_name?: StringNullableFilter<"facility"> | string | null
    supervising_doctor_practice_id?: StringNullableFilter<"facility"> | string | null
    services_offered?: StringFilter<"facility"> | string
    landmark?: StringNullableFilter<"facility"> | string | null
    number_of_bed?: IntFilter<"facility"> | number
    source_of_water?: StringFilter<"facility"> | string
    method_of_disposal?: StringFilter<"facility"> | string
    site_plan?: StringFilter<"facility"> | string
    building_plan?: StringFilter<"facility"> | string
    tax_clearance_certificate?: StringFilter<"facility"> | string
    compliance_certificate?: StringNullableFilter<"facility"> | string | null
    facility_personnel_count?: JsonNullableFilter<"facility">
    expiry_date?: StringNullableFilter<"facility"> | string | null
    enugu_facility_id?: StringFilter<"facility"> | string
    reference?: StringFilter<"facility"> | string
    current_reference?: StringNullableFilter<"facility"> | string | null
    password?: StringNullableFilter<"facility"> | string | null
    reset_password_token?: StringNullableFilter<"facility"> | string | null
    assigned_inspector?: IntNullableFilter<"facility"> | number | null
    inspection_date?: DateTimeNullableFilter<"facility"> | Date | string | null
    is_inspected?: BoolFilter<"facility"> | boolean
    certificate_url?: StringNullableFilter<"facility"> | string | null
    cac_status?: EnumStatusFilter<"facility"> | $Enums.Status
    status?: EnumStatusFilter<"facility"> | $Enums.Status
    createdAt?: DateTimeFilter<"facility"> | Date | string
    updatedAt?: DateTimeFilter<"facility"> | Date | string
    facility_personnel?: Facility_personnelListRelationFilter
    inspection_review?: Inspection_reviewListRelationFilter
    inspector?: XOR<InspectorNullableRelationFilter, inspectorWhereInput> | null
  }

  export type facilityOrderByWithRelationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrderInput | SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrderInput | SortOrder
    owner_passport?: SortOrderInput | SortOrder
    owner_email?: SortOrder
    owner_gender?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    facility_sector?: SortOrder
    facility_type?: SortOrder
    facility_level?: SortOrder
    personnel_incharge?: SortOrderInput | SortOrder
    personnel_incharge_name?: SortOrderInput | SortOrder
    personnel_incharge_practice_id?: SortOrderInput | SortOrder
    supervising_doctor_name?: SortOrderInput | SortOrder
    supervising_doctor_practice_id?: SortOrderInput | SortOrder
    services_offered?: SortOrder
    landmark?: SortOrderInput | SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    tax_clearance_certificate?: SortOrder
    compliance_certificate?: SortOrderInput | SortOrder
    facility_personnel_count?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    enugu_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    assigned_inspector?: SortOrderInput | SortOrder
    inspection_date?: SortOrderInput | SortOrder
    is_inspected?: SortOrder
    certificate_url?: SortOrderInput | SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facility_personnel?: facility_personnelOrderByRelationAggregateInput
    inspection_review?: inspection_reviewOrderByRelationAggregateInput
    inspector?: inspectorOrderByWithRelationInput
  }

  export type facilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cac?: string
    enugu_facility_id?: string
    reference?: string
    current_reference?: string
    reset_password_token?: string
    AND?: facilityWhereInput | facilityWhereInput[]
    OR?: facilityWhereInput[]
    NOT?: facilityWhereInput | facilityWhereInput[]
    facility_name?: StringFilter<"facility"> | string
    location?: StringFilter<"facility"> | string
    cac_image?: StringNullableFilter<"facility"> | string | null
    owner_name?: StringFilter<"facility"> | string
    owner_phone_number?: StringFilter<"facility"> | string
    owner_contact_address?: StringFilter<"facility"> | string
    owner_nin?: StringFilter<"facility"> | string
    owner_nin_image?: StringNullableFilter<"facility"> | string | null
    owner_passport?: StringNullableFilter<"facility"> | string | null
    owner_email?: StringFilter<"facility"> | string
    owner_gender?: StringNullableFilter<"facility"> | string | null
    lga?: StringNullableFilter<"facility"> | string | null
    facility_sector?: EnumSectorFilter<"facility"> | $Enums.Sector
    facility_type?: EnumFacility_TypeFilter<"facility"> | $Enums.Facility_Type
    facility_level?: EnumLevelFilter<"facility"> | $Enums.Level
    personnel_incharge?: StringNullableFilter<"facility"> | string | null
    personnel_incharge_name?: StringNullableFilter<"facility"> | string | null
    personnel_incharge_practice_id?: StringNullableFilter<"facility"> | string | null
    supervising_doctor_name?: StringNullableFilter<"facility"> | string | null
    supervising_doctor_practice_id?: StringNullableFilter<"facility"> | string | null
    services_offered?: StringFilter<"facility"> | string
    landmark?: StringNullableFilter<"facility"> | string | null
    number_of_bed?: IntFilter<"facility"> | number
    source_of_water?: StringFilter<"facility"> | string
    method_of_disposal?: StringFilter<"facility"> | string
    site_plan?: StringFilter<"facility"> | string
    building_plan?: StringFilter<"facility"> | string
    tax_clearance_certificate?: StringFilter<"facility"> | string
    compliance_certificate?: StringNullableFilter<"facility"> | string | null
    facility_personnel_count?: JsonNullableFilter<"facility">
    expiry_date?: StringNullableFilter<"facility"> | string | null
    password?: StringNullableFilter<"facility"> | string | null
    assigned_inspector?: IntNullableFilter<"facility"> | number | null
    inspection_date?: DateTimeNullableFilter<"facility"> | Date | string | null
    is_inspected?: BoolFilter<"facility"> | boolean
    certificate_url?: StringNullableFilter<"facility"> | string | null
    cac_status?: EnumStatusFilter<"facility"> | $Enums.Status
    status?: EnumStatusFilter<"facility"> | $Enums.Status
    createdAt?: DateTimeFilter<"facility"> | Date | string
    updatedAt?: DateTimeFilter<"facility"> | Date | string
    facility_personnel?: Facility_personnelListRelationFilter
    inspection_review?: Inspection_reviewListRelationFilter
    inspector?: XOR<InspectorNullableRelationFilter, inspectorWhereInput> | null
  }, "id" | "cac" | "enugu_facility_id" | "reference" | "current_reference" | "reset_password_token">

  export type facilityOrderByWithAggregationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrderInput | SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrderInput | SortOrder
    owner_passport?: SortOrderInput | SortOrder
    owner_email?: SortOrder
    owner_gender?: SortOrderInput | SortOrder
    lga?: SortOrderInput | SortOrder
    facility_sector?: SortOrder
    facility_type?: SortOrder
    facility_level?: SortOrder
    personnel_incharge?: SortOrderInput | SortOrder
    personnel_incharge_name?: SortOrderInput | SortOrder
    personnel_incharge_practice_id?: SortOrderInput | SortOrder
    supervising_doctor_name?: SortOrderInput | SortOrder
    supervising_doctor_practice_id?: SortOrderInput | SortOrder
    services_offered?: SortOrder
    landmark?: SortOrderInput | SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    tax_clearance_certificate?: SortOrder
    compliance_certificate?: SortOrderInput | SortOrder
    facility_personnel_count?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    enugu_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    assigned_inspector?: SortOrderInput | SortOrder
    inspection_date?: SortOrderInput | SortOrder
    is_inspected?: SortOrder
    certificate_url?: SortOrderInput | SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: facilityCountOrderByAggregateInput
    _avg?: facilityAvgOrderByAggregateInput
    _max?: facilityMaxOrderByAggregateInput
    _min?: facilityMinOrderByAggregateInput
    _sum?: facilitySumOrderByAggregateInput
  }

  export type facilityScalarWhereWithAggregatesInput = {
    AND?: facilityScalarWhereWithAggregatesInput | facilityScalarWhereWithAggregatesInput[]
    OR?: facilityScalarWhereWithAggregatesInput[]
    NOT?: facilityScalarWhereWithAggregatesInput | facilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facility"> | number
    facility_name?: StringWithAggregatesFilter<"facility"> | string
    location?: StringWithAggregatesFilter<"facility"> | string
    cac?: StringWithAggregatesFilter<"facility"> | string
    cac_image?: StringNullableWithAggregatesFilter<"facility"> | string | null
    owner_name?: StringWithAggregatesFilter<"facility"> | string
    owner_phone_number?: StringWithAggregatesFilter<"facility"> | string
    owner_contact_address?: StringWithAggregatesFilter<"facility"> | string
    owner_nin?: StringWithAggregatesFilter<"facility"> | string
    owner_nin_image?: StringNullableWithAggregatesFilter<"facility"> | string | null
    owner_passport?: StringNullableWithAggregatesFilter<"facility"> | string | null
    owner_email?: StringWithAggregatesFilter<"facility"> | string
    owner_gender?: StringNullableWithAggregatesFilter<"facility"> | string | null
    lga?: StringNullableWithAggregatesFilter<"facility"> | string | null
    facility_sector?: EnumSectorWithAggregatesFilter<"facility"> | $Enums.Sector
    facility_type?: EnumFacility_TypeWithAggregatesFilter<"facility"> | $Enums.Facility_Type
    facility_level?: EnumLevelWithAggregatesFilter<"facility"> | $Enums.Level
    personnel_incharge?: StringNullableWithAggregatesFilter<"facility"> | string | null
    personnel_incharge_name?: StringNullableWithAggregatesFilter<"facility"> | string | null
    personnel_incharge_practice_id?: StringNullableWithAggregatesFilter<"facility"> | string | null
    supervising_doctor_name?: StringNullableWithAggregatesFilter<"facility"> | string | null
    supervising_doctor_practice_id?: StringNullableWithAggregatesFilter<"facility"> | string | null
    services_offered?: StringWithAggregatesFilter<"facility"> | string
    landmark?: StringNullableWithAggregatesFilter<"facility"> | string | null
    number_of_bed?: IntWithAggregatesFilter<"facility"> | number
    source_of_water?: StringWithAggregatesFilter<"facility"> | string
    method_of_disposal?: StringWithAggregatesFilter<"facility"> | string
    site_plan?: StringWithAggregatesFilter<"facility"> | string
    building_plan?: StringWithAggregatesFilter<"facility"> | string
    tax_clearance_certificate?: StringWithAggregatesFilter<"facility"> | string
    compliance_certificate?: StringNullableWithAggregatesFilter<"facility"> | string | null
    facility_personnel_count?: JsonNullableWithAggregatesFilter<"facility">
    expiry_date?: StringNullableWithAggregatesFilter<"facility"> | string | null
    enugu_facility_id?: StringWithAggregatesFilter<"facility"> | string
    reference?: StringWithAggregatesFilter<"facility"> | string
    current_reference?: StringNullableWithAggregatesFilter<"facility"> | string | null
    password?: StringNullableWithAggregatesFilter<"facility"> | string | null
    reset_password_token?: StringNullableWithAggregatesFilter<"facility"> | string | null
    assigned_inspector?: IntNullableWithAggregatesFilter<"facility"> | number | null
    inspection_date?: DateTimeNullableWithAggregatesFilter<"facility"> | Date | string | null
    is_inspected?: BoolWithAggregatesFilter<"facility"> | boolean
    certificate_url?: StringNullableWithAggregatesFilter<"facility"> | string | null
    cac_status?: EnumStatusWithAggregatesFilter<"facility"> | $Enums.Status
    status?: EnumStatusWithAggregatesFilter<"facility"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"facility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"facility"> | Date | string
  }

  export type facility_personnelWhereInput = {
    AND?: facility_personnelWhereInput | facility_personnelWhereInput[]
    OR?: facility_personnelWhereInput[]
    NOT?: facility_personnelWhereInput | facility_personnelWhereInput[]
    id?: IntFilter<"facility_personnel"> | number
    facility_id?: IntFilter<"facility_personnel"> | number
    user_id?: IntFilter<"facility_personnel"> | number
    enugu_practice_id?: StringFilter<"facility_personnel"> | string
    type?: StringFilter<"facility_personnel"> | string
    createdAt?: DateTimeFilter<"facility_personnel"> | Date | string
    facility?: XOR<FacilityRelationFilter, facilityWhereInput>
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type facility_personnelOrderByWithRelationInput = {
    id?: SortOrder
    facility_id?: SortOrder
    user_id?: SortOrder
    enugu_practice_id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    facility?: facilityOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type facility_personnelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: facility_personnelWhereInput | facility_personnelWhereInput[]
    OR?: facility_personnelWhereInput[]
    NOT?: facility_personnelWhereInput | facility_personnelWhereInput[]
    facility_id?: IntFilter<"facility_personnel"> | number
    user_id?: IntFilter<"facility_personnel"> | number
    enugu_practice_id?: StringFilter<"facility_personnel"> | string
    type?: StringFilter<"facility_personnel"> | string
    createdAt?: DateTimeFilter<"facility_personnel"> | Date | string
    facility?: XOR<FacilityRelationFilter, facilityWhereInput>
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id">

  export type facility_personnelOrderByWithAggregationInput = {
    id?: SortOrder
    facility_id?: SortOrder
    user_id?: SortOrder
    enugu_practice_id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: facility_personnelCountOrderByAggregateInput
    _avg?: facility_personnelAvgOrderByAggregateInput
    _max?: facility_personnelMaxOrderByAggregateInput
    _min?: facility_personnelMinOrderByAggregateInput
    _sum?: facility_personnelSumOrderByAggregateInput
  }

  export type facility_personnelScalarWhereWithAggregatesInput = {
    AND?: facility_personnelScalarWhereWithAggregatesInput | facility_personnelScalarWhereWithAggregatesInput[]
    OR?: facility_personnelScalarWhereWithAggregatesInput[]
    NOT?: facility_personnelScalarWhereWithAggregatesInput | facility_personnelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facility_personnel"> | number
    facility_id?: IntWithAggregatesFilter<"facility_personnel"> | number
    user_id?: IntWithAggregatesFilter<"facility_personnel"> | number
    enugu_practice_id?: StringWithAggregatesFilter<"facility_personnel"> | string
    type?: StringWithAggregatesFilter<"facility_personnel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"facility_personnel"> | Date | string
  }

  export type food_facilityWhereInput = {
    AND?: food_facilityWhereInput | food_facilityWhereInput[]
    OR?: food_facilityWhereInput[]
    NOT?: food_facilityWhereInput | food_facilityWhereInput[]
    id?: IntFilter<"food_facility"> | number
    facility_name?: StringFilter<"food_facility"> | string
    location?: StringFilter<"food_facility"> | string
    cac?: StringFilter<"food_facility"> | string
    cac_image?: StringNullableFilter<"food_facility"> | string | null
    owner_name?: StringFilter<"food_facility"> | string
    owner_phone_number?: StringFilter<"food_facility"> | string
    owner_contact_address?: StringFilter<"food_facility"> | string
    owner_nin?: StringFilter<"food_facility"> | string
    owner_nin_image?: StringNullableFilter<"food_facility"> | string | null
    owner_email?: StringFilter<"food_facility"> | string
    lga?: StringNullableFilter<"food_facility"> | string | null
    landmark?: StringNullableFilter<"food_facility"> | string | null
    source_of_water?: StringFilter<"food_facility"> | string
    method_of_disposal?: StringFilter<"food_facility"> | string
    category?: EnumCategoryNullableFilter<"food_facility"> | $Enums.Category | null
    facility_personnel_count?: JsonNullableFilter<"food_facility">
    expiry_date?: StringNullableFilter<"food_facility"> | string | null
    enugu_food_facility_id?: StringFilter<"food_facility"> | string
    reference?: StringFilter<"food_facility"> | string
    current_reference?: StringNullableFilter<"food_facility"> | string | null
    password?: StringNullableFilter<"food_facility"> | string | null
    reset_password_token?: StringNullableFilter<"food_facility"> | string | null
    cac_status?: EnumStatusFilter<"food_facility"> | $Enums.Status
    status?: EnumStatusFilter<"food_facility"> | $Enums.Status
    createdAt?: DateTimeFilter<"food_facility"> | Date | string
    updatedAt?: DateTimeFilter<"food_facility"> | Date | string
    food_facility_personnel?: Food_facility_personnelListRelationFilter
  }

  export type food_facilityOrderByWithRelationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrderInput | SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrderInput | SortOrder
    owner_email?: SortOrder
    lga?: SortOrderInput | SortOrder
    landmark?: SortOrderInput | SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    category?: SortOrderInput | SortOrder
    facility_personnel_count?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    enugu_food_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food_facility_personnel?: food_facility_personnelOrderByRelationAggregateInput
  }

  export type food_facilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    enugu_food_facility_id?: string
    reference?: string
    current_reference?: string
    reset_password_token?: string
    AND?: food_facilityWhereInput | food_facilityWhereInput[]
    OR?: food_facilityWhereInput[]
    NOT?: food_facilityWhereInput | food_facilityWhereInput[]
    facility_name?: StringFilter<"food_facility"> | string
    location?: StringFilter<"food_facility"> | string
    cac?: StringFilter<"food_facility"> | string
    cac_image?: StringNullableFilter<"food_facility"> | string | null
    owner_name?: StringFilter<"food_facility"> | string
    owner_phone_number?: StringFilter<"food_facility"> | string
    owner_contact_address?: StringFilter<"food_facility"> | string
    owner_nin?: StringFilter<"food_facility"> | string
    owner_nin_image?: StringNullableFilter<"food_facility"> | string | null
    owner_email?: StringFilter<"food_facility"> | string
    lga?: StringNullableFilter<"food_facility"> | string | null
    landmark?: StringNullableFilter<"food_facility"> | string | null
    source_of_water?: StringFilter<"food_facility"> | string
    method_of_disposal?: StringFilter<"food_facility"> | string
    category?: EnumCategoryNullableFilter<"food_facility"> | $Enums.Category | null
    facility_personnel_count?: JsonNullableFilter<"food_facility">
    expiry_date?: StringNullableFilter<"food_facility"> | string | null
    password?: StringNullableFilter<"food_facility"> | string | null
    cac_status?: EnumStatusFilter<"food_facility"> | $Enums.Status
    status?: EnumStatusFilter<"food_facility"> | $Enums.Status
    createdAt?: DateTimeFilter<"food_facility"> | Date | string
    updatedAt?: DateTimeFilter<"food_facility"> | Date | string
    food_facility_personnel?: Food_facility_personnelListRelationFilter
  }, "id" | "enugu_food_facility_id" | "reference" | "current_reference" | "reset_password_token">

  export type food_facilityOrderByWithAggregationInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrderInput | SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrderInput | SortOrder
    owner_email?: SortOrder
    lga?: SortOrderInput | SortOrder
    landmark?: SortOrderInput | SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    category?: SortOrderInput | SortOrder
    facility_personnel_count?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    enugu_food_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: food_facilityCountOrderByAggregateInput
    _avg?: food_facilityAvgOrderByAggregateInput
    _max?: food_facilityMaxOrderByAggregateInput
    _min?: food_facilityMinOrderByAggregateInput
    _sum?: food_facilitySumOrderByAggregateInput
  }

  export type food_facilityScalarWhereWithAggregatesInput = {
    AND?: food_facilityScalarWhereWithAggregatesInput | food_facilityScalarWhereWithAggregatesInput[]
    OR?: food_facilityScalarWhereWithAggregatesInput[]
    NOT?: food_facilityScalarWhereWithAggregatesInput | food_facilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"food_facility"> | number
    facility_name?: StringWithAggregatesFilter<"food_facility"> | string
    location?: StringWithAggregatesFilter<"food_facility"> | string
    cac?: StringWithAggregatesFilter<"food_facility"> | string
    cac_image?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    owner_name?: StringWithAggregatesFilter<"food_facility"> | string
    owner_phone_number?: StringWithAggregatesFilter<"food_facility"> | string
    owner_contact_address?: StringWithAggregatesFilter<"food_facility"> | string
    owner_nin?: StringWithAggregatesFilter<"food_facility"> | string
    owner_nin_image?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    owner_email?: StringWithAggregatesFilter<"food_facility"> | string
    lga?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    landmark?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    source_of_water?: StringWithAggregatesFilter<"food_facility"> | string
    method_of_disposal?: StringWithAggregatesFilter<"food_facility"> | string
    category?: EnumCategoryNullableWithAggregatesFilter<"food_facility"> | $Enums.Category | null
    facility_personnel_count?: JsonNullableWithAggregatesFilter<"food_facility">
    expiry_date?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    enugu_food_facility_id?: StringWithAggregatesFilter<"food_facility"> | string
    reference?: StringWithAggregatesFilter<"food_facility"> | string
    current_reference?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    password?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    reset_password_token?: StringNullableWithAggregatesFilter<"food_facility"> | string | null
    cac_status?: EnumStatusWithAggregatesFilter<"food_facility"> | $Enums.Status
    status?: EnumStatusWithAggregatesFilter<"food_facility"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"food_facility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"food_facility"> | Date | string
  }

  export type food_facility_personnelWhereInput = {
    AND?: food_facility_personnelWhereInput | food_facility_personnelWhereInput[]
    OR?: food_facility_personnelWhereInput[]
    NOT?: food_facility_personnelWhereInput | food_facility_personnelWhereInput[]
    id?: IntFilter<"food_facility_personnel"> | number
    food_facility_id?: IntFilter<"food_facility_personnel"> | number
    food_handler_id?: IntFilter<"food_facility_personnel"> | number
    enugu_handler_id?: StringFilter<"food_facility_personnel"> | string
    createdAt?: DateTimeFilter<"food_facility_personnel"> | Date | string
    food_facility?: XOR<Food_facilityRelationFilter, food_facilityWhereInput>
    food_handler?: XOR<Food_handlersRelationFilter, food_handlersWhereInput>
  }

  export type food_facility_personnelOrderByWithRelationInput = {
    id?: SortOrder
    food_facility_id?: SortOrder
    food_handler_id?: SortOrder
    enugu_handler_id?: SortOrder
    createdAt?: SortOrder
    food_facility?: food_facilityOrderByWithRelationInput
    food_handler?: food_handlersOrderByWithRelationInput
  }

  export type food_facility_personnelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: food_facility_personnelWhereInput | food_facility_personnelWhereInput[]
    OR?: food_facility_personnelWhereInput[]
    NOT?: food_facility_personnelWhereInput | food_facility_personnelWhereInput[]
    food_facility_id?: IntFilter<"food_facility_personnel"> | number
    food_handler_id?: IntFilter<"food_facility_personnel"> | number
    enugu_handler_id?: StringFilter<"food_facility_personnel"> | string
    createdAt?: DateTimeFilter<"food_facility_personnel"> | Date | string
    food_facility?: XOR<Food_facilityRelationFilter, food_facilityWhereInput>
    food_handler?: XOR<Food_handlersRelationFilter, food_handlersWhereInput>
  }, "id">

  export type food_facility_personnelOrderByWithAggregationInput = {
    id?: SortOrder
    food_facility_id?: SortOrder
    food_handler_id?: SortOrder
    enugu_handler_id?: SortOrder
    createdAt?: SortOrder
    _count?: food_facility_personnelCountOrderByAggregateInput
    _avg?: food_facility_personnelAvgOrderByAggregateInput
    _max?: food_facility_personnelMaxOrderByAggregateInput
    _min?: food_facility_personnelMinOrderByAggregateInput
    _sum?: food_facility_personnelSumOrderByAggregateInput
  }

  export type food_facility_personnelScalarWhereWithAggregatesInput = {
    AND?: food_facility_personnelScalarWhereWithAggregatesInput | food_facility_personnelScalarWhereWithAggregatesInput[]
    OR?: food_facility_personnelScalarWhereWithAggregatesInput[]
    NOT?: food_facility_personnelScalarWhereWithAggregatesInput | food_facility_personnelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"food_facility_personnel"> | number
    food_facility_id?: IntWithAggregatesFilter<"food_facility_personnel"> | number
    food_handler_id?: IntWithAggregatesFilter<"food_facility_personnel"> | number
    enugu_handler_id?: StringWithAggregatesFilter<"food_facility_personnel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"food_facility_personnel"> | Date | string
  }

  export type adminCreateInput = {
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspection_reviewCreateInput = {
    cac: boolean
    owner_nin: boolean
    services_offered: boolean
    number_of_bed: boolean
    source_of_water: boolean
    method_of_disposal: boolean
    site_plan: boolean
    building_plan: boolean
    compliance_certificate?: boolean | null
    tax_clearance_certificate: boolean
    facility_personnel_count: boolean
    facility_personnel: boolean
    review: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    facility: facilityCreateNestedOneWithoutInspection_reviewInput
  }

  export type inspection_reviewUncheckedCreateInput = {
    id?: number
    facility_id: number
    cac: boolean
    owner_nin: boolean
    services_offered: boolean
    number_of_bed: boolean
    source_of_water: boolean
    method_of_disposal: boolean
    site_plan: boolean
    building_plan: boolean
    compliance_certificate?: boolean | null
    tax_clearance_certificate: boolean
    facility_personnel_count: boolean
    facility_personnel: boolean
    review: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inspection_reviewUpdateInput = {
    cac?: BoolFieldUpdateOperationsInput | boolean
    owner_nin?: BoolFieldUpdateOperationsInput | boolean
    services_offered?: BoolFieldUpdateOperationsInput | boolean
    number_of_bed?: BoolFieldUpdateOperationsInput | boolean
    source_of_water?: BoolFieldUpdateOperationsInput | boolean
    method_of_disposal?: BoolFieldUpdateOperationsInput | boolean
    site_plan?: BoolFieldUpdateOperationsInput | boolean
    building_plan?: BoolFieldUpdateOperationsInput | boolean
    compliance_certificate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tax_clearance_certificate?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel_count?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel?: BoolFieldUpdateOperationsInput | boolean
    review?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: facilityUpdateOneRequiredWithoutInspection_reviewNestedInput
  }

  export type inspection_reviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_id?: IntFieldUpdateOperationsInput | number
    cac?: BoolFieldUpdateOperationsInput | boolean
    owner_nin?: BoolFieldUpdateOperationsInput | boolean
    services_offered?: BoolFieldUpdateOperationsInput | boolean
    number_of_bed?: BoolFieldUpdateOperationsInput | boolean
    source_of_water?: BoolFieldUpdateOperationsInput | boolean
    method_of_disposal?: BoolFieldUpdateOperationsInput | boolean
    site_plan?: BoolFieldUpdateOperationsInput | boolean
    building_plan?: BoolFieldUpdateOperationsInput | boolean
    compliance_certificate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tax_clearance_certificate?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel_count?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel?: BoolFieldUpdateOperationsInput | boolean
    review?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspection_reviewCreateManyInput = {
    id?: number
    facility_id: number
    cac: boolean
    owner_nin: boolean
    services_offered: boolean
    number_of_bed: boolean
    source_of_water: boolean
    method_of_disposal: boolean
    site_plan: boolean
    building_plan: boolean
    compliance_certificate?: boolean | null
    tax_clearance_certificate: boolean
    facility_personnel_count: boolean
    facility_personnel: boolean
    review: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inspection_reviewUpdateManyMutationInput = {
    cac?: BoolFieldUpdateOperationsInput | boolean
    owner_nin?: BoolFieldUpdateOperationsInput | boolean
    services_offered?: BoolFieldUpdateOperationsInput | boolean
    number_of_bed?: BoolFieldUpdateOperationsInput | boolean
    source_of_water?: BoolFieldUpdateOperationsInput | boolean
    method_of_disposal?: BoolFieldUpdateOperationsInput | boolean
    site_plan?: BoolFieldUpdateOperationsInput | boolean
    building_plan?: BoolFieldUpdateOperationsInput | boolean
    compliance_certificate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tax_clearance_certificate?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel_count?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel?: BoolFieldUpdateOperationsInput | boolean
    review?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspection_reviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_id?: IntFieldUpdateOperationsInput | number
    cac?: BoolFieldUpdateOperationsInput | boolean
    owner_nin?: BoolFieldUpdateOperationsInput | boolean
    services_offered?: BoolFieldUpdateOperationsInput | boolean
    number_of_bed?: BoolFieldUpdateOperationsInput | boolean
    source_of_water?: BoolFieldUpdateOperationsInput | boolean
    method_of_disposal?: BoolFieldUpdateOperationsInput | boolean
    site_plan?: BoolFieldUpdateOperationsInput | boolean
    building_plan?: BoolFieldUpdateOperationsInput | boolean
    compliance_certificate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tax_clearance_certificate?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel_count?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel?: BoolFieldUpdateOperationsInput | boolean
    review?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspectorCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    address: string
    role?: $Enums.Role
    lga?: string | null
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility?: facilityCreateNestedManyWithoutInspectorInput
  }

  export type inspectorUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    address: string
    role?: $Enums.Role
    lga?: string | null
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility?: facilityUncheckedCreateNestedManyWithoutInspectorInput
  }

  export type inspectorUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: facilityUpdateManyWithoutInspectorNestedInput
  }

  export type inspectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: facilityUncheckedUpdateManyWithoutInspectorNestedInput
  }

  export type inspectorCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    address: string
    role?: $Enums.Role
    lga?: string | null
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inspectorUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stateCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    local_government?: local_governmentCreateNestedManyWithoutStateInput
  }

  export type stateUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    local_government?: local_governmentUncheckedCreateNestedManyWithoutStateInput
  }

  export type stateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    local_government?: local_governmentUpdateManyWithoutStateNestedInput
  }

  export type stateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    local_government?: local_governmentUncheckedUpdateManyWithoutStateNestedInput
  }

  export type stateCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type stateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type local_governmentCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state: stateCreateNestedOneWithoutLocal_governmentInput
  }

  export type local_governmentUncheckedCreateInput = {
    id?: number
    name: string
    state_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type local_governmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: stateUpdateOneRequiredWithoutLocal_governmentNestedInput
  }

  export type local_governmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    state_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type local_governmentCreateManyInput = {
    id?: number
    name: string
    state_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type local_governmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type local_governmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    state_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    fullname: string
    email: string
    phone_number: string
    address: string
    type: $Enums.Type
    practice_id: string
    practice_certificate?: string | null
    enugu_practice_id: string
    specialization?: string | null
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    practice_id_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    phone_number: string
    address: string
    type: $Enums.Type
    practice_id: string
    practice_certificate?: string | null
    enugu_practice_id: string
    specialization?: string | null
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    practice_id_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    practice_id?: StringFieldUpdateOperationsInput | string
    practice_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    practice_id_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    practice_id?: StringFieldUpdateOperationsInput | string
    practice_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    practice_id_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    fullname: string
    email: string
    phone_number: string
    address: string
    type: $Enums.Type
    practice_id: string
    practice_certificate?: string | null
    enugu_practice_id: string
    specialization?: string | null
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    practice_id_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    practice_id?: StringFieldUpdateOperationsInput | string
    practice_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    practice_id_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    practice_id?: StringFieldUpdateOperationsInput | string
    practice_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    practice_id_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_handlersCreateInput = {
    fullname: string
    email: string
    phone_number: string
    address: string
    enugu_handler_id: string
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    food_facility_personnel?: food_facility_personnelCreateNestedManyWithoutFood_handlerInput
  }

  export type food_handlersUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    phone_number: string
    address: string
    enugu_handler_id: string
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    food_facility_personnel?: food_facility_personnelUncheckedCreateNestedManyWithoutFood_handlerInput
  }

  export type food_handlersUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_facility_personnel?: food_facility_personnelUpdateManyWithoutFood_handlerNestedInput
  }

  export type food_handlersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_facility_personnel?: food_facility_personnelUncheckedUpdateManyWithoutFood_handlerNestedInput
  }

  export type food_handlersCreateManyInput = {
    id?: number
    fullname: string
    email: string
    phone_number: string
    address: string
    enugu_handler_id: string
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_handlersUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_handlersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personnel_paymentCreateInput = {
    fullname: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    has_registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type personnel_paymentUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    has_registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type personnel_paymentUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personnel_paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personnel_paymentCreateManyInput = {
    id?: number
    fullname: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    has_registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type personnel_paymentUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personnel_paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_paymentCreateInput = {
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    has_registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facility_paymentUncheckedCreateInput = {
    id?: number
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    has_registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facility_paymentUpdateInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_paymentCreateManyInput = {
    id?: number
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    has_registered?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facility_paymentUpdateManyMutationInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    has_registered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_complete_paymentCreateInput = {
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facility_complete_paymentUncheckedCreateInput = {
    id?: number
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facility_complete_paymentUpdateInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_complete_paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_complete_paymentCreateManyInput = {
    id?: number
    facility_name: string
    email: string
    amount: string
    reference: string
    phone_number: string
    type: string
    type_of_payment?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facility_complete_paymentUpdateManyMutationInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_complete_paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    type_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revokedTokenCreateInput = {
    token: string
    createdAt?: Date | string
  }

  export type revokedTokenUncheckedCreateInput = {
    id?: number
    token: string
    createdAt?: Date | string
  }

  export type revokedTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revokedTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revokedTokenCreateManyInput = {
    id?: number
    token: string
    createdAt?: Date | string
  }

  export type revokedTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revokedTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facilityCreateInput = {
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelCreateNestedManyWithoutFacilityInput
    inspection_review?: inspection_reviewCreateNestedManyWithoutFacilityInput
    inspector?: inspectorCreateNestedOneWithoutFacilityInput
  }

  export type facilityUncheckedCreateInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    assigned_inspector?: number | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelUncheckedCreateNestedManyWithoutFacilityInput
    inspection_review?: inspection_reviewUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityUpdateInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUpdateManyWithoutFacilityNestedInput
    inspection_review?: inspection_reviewUpdateManyWithoutFacilityNestedInput
    inspector?: inspectorUpdateOneWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_inspector?: NullableIntFieldUpdateOperationsInput | number | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUncheckedUpdateManyWithoutFacilityNestedInput
    inspection_review?: inspection_reviewUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type facilityCreateManyInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    assigned_inspector?: number | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facilityUpdateManyMutationInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_inspector?: NullableIntFieldUpdateOperationsInput | number | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelCreateInput = {
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
    facility: facilityCreateNestedOneWithoutFacility_personnelInput
    user: usersCreateNestedOneWithoutFacility_personnelInput
  }

  export type facility_personnelUncheckedCreateInput = {
    id?: number
    facility_id: number
    user_id: number
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
  }

  export type facility_personnelUpdateInput = {
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: facilityUpdateOneRequiredWithoutFacility_personnelNestedInput
    user?: usersUpdateOneRequiredWithoutFacility_personnelNestedInput
  }

  export type facility_personnelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelCreateManyInput = {
    id?: number
    facility_id: number
    user_id: number
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
  }

  export type facility_personnelUpdateManyMutationInput = {
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facilityCreateInput = {
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_email: string
    lga?: string | null
    landmark?: string | null
    source_of_water: string
    method_of_disposal: string
    category?: $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_food_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    food_facility_personnel?: food_facility_personnelCreateNestedManyWithoutFood_facilityInput
  }

  export type food_facilityUncheckedCreateInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_email: string
    lga?: string | null
    landmark?: string | null
    source_of_water: string
    method_of_disposal: string
    category?: $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_food_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    food_facility_personnel?: food_facility_personnelUncheckedCreateNestedManyWithoutFood_facilityInput
  }

  export type food_facilityUpdateInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_food_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_facility_personnel?: food_facility_personnelUpdateManyWithoutFood_facilityNestedInput
  }

  export type food_facilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_food_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_facility_personnel?: food_facility_personnelUncheckedUpdateManyWithoutFood_facilityNestedInput
  }

  export type food_facilityCreateManyInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_email: string
    lga?: string | null
    landmark?: string | null
    source_of_water: string
    method_of_disposal: string
    category?: $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_food_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_facilityUpdateManyMutationInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_food_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_food_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelCreateInput = {
    enugu_handler_id: string
    createdAt?: Date | string
    food_facility: food_facilityCreateNestedOneWithoutFood_facility_personnelInput
    food_handler: food_handlersCreateNestedOneWithoutFood_facility_personnelInput
  }

  export type food_facility_personnelUncheckedCreateInput = {
    id?: number
    food_facility_id: number
    food_handler_id: number
    enugu_handler_id: string
    createdAt?: Date | string
  }

  export type food_facility_personnelUpdateInput = {
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_facility?: food_facilityUpdateOneRequiredWithoutFood_facility_personnelNestedInput
    food_handler?: food_handlersUpdateOneRequiredWithoutFood_facility_personnelNestedInput
  }

  export type food_facility_personnelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_facility_id?: IntFieldUpdateOperationsInput | number
    food_handler_id?: IntFieldUpdateOperationsInput | number
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelCreateManyInput = {
    id?: number
    food_facility_id: number
    food_handler_id: number
    enugu_handler_id: string
    createdAt?: Date | string
  }

  export type food_facility_personnelUpdateManyMutationInput = {
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_facility_id?: IntFieldUpdateOperationsInput | number
    food_handler_id?: IntFieldUpdateOperationsInput | number
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type FacilityRelationFilter = {
    is?: facilityWhereInput
    isNot?: facilityWhereInput
  }

  export type inspection_reviewCountOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    cac?: SortOrder
    owner_nin?: SortOrder
    services_offered?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    compliance_certificate?: SortOrder
    tax_clearance_certificate?: SortOrder
    facility_personnel_count?: SortOrder
    facility_personnel?: SortOrder
    review?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inspection_reviewAvgOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
  }

  export type inspection_reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    cac?: SortOrder
    owner_nin?: SortOrder
    services_offered?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    compliance_certificate?: SortOrder
    tax_clearance_certificate?: SortOrder
    facility_personnel_count?: SortOrder
    facility_personnel?: SortOrder
    review?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inspection_reviewMinOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    cac?: SortOrder
    owner_nin?: SortOrder
    services_offered?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    compliance_certificate?: SortOrder
    tax_clearance_certificate?: SortOrder
    facility_personnel_count?: SortOrder
    facility_personnel?: SortOrder
    review?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inspection_reviewSumOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type FacilityListRelationFilter = {
    every?: facilityWhereInput
    some?: facilityWhereInput
    none?: facilityWhereInput
  }

  export type facilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inspectorCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    lga?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inspectorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type inspectorMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    lga?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inspectorMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    lga?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type inspectorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Local_governmentListRelationFilter = {
    every?: local_governmentWhereInput
    some?: local_governmentWhereInput
    none?: local_governmentWhereInput
  }

  export type local_governmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type stateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type stateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type stateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateRelationFilter = {
    is?: stateWhereInput
    isNot?: stateWhereInput
  }

  export type local_governmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type local_governmentAvgOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
  }

  export type local_governmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type local_governmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type local_governmentSumOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type Facility_personnelListRelationFilter = {
    every?: facility_personnelWhereInput
    some?: facility_personnelWhereInput
    none?: facility_personnelWhereInput
  }

  export type facility_personnelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    type?: SortOrder
    practice_id?: SortOrder
    practice_certificate?: SortOrder
    enugu_practice_id?: SortOrder
    specialization?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    practice_id_status?: SortOrder
    status?: SortOrder
    passport?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    certificate_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    type?: SortOrder
    practice_id?: SortOrder
    practice_certificate?: SortOrder
    enugu_practice_id?: SortOrder
    specialization?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    practice_id_status?: SortOrder
    status?: SortOrder
    passport?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    certificate_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    type?: SortOrder
    practice_id?: SortOrder
    practice_certificate?: SortOrder
    enugu_practice_id?: SortOrder
    specialization?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    practice_id_status?: SortOrder
    status?: SortOrder
    passport?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    certificate_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type Food_facility_personnelListRelationFilter = {
    every?: food_facility_personnelWhereInput
    some?: food_facility_personnelWhereInput
    none?: food_facility_personnelWhereInput
  }

  export type food_facility_personnelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type food_handlersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    enugu_handler_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    status?: SortOrder
    passport?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    certificate_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_handlersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type food_handlersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    enugu_handler_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    status?: SortOrder
    passport?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    certificate_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_handlersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    enugu_handler_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    expiry_date?: SortOrder
    nin_status?: SortOrder
    status?: SortOrder
    passport?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    certificate_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_handlersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type personnel_paymentCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type personnel_paymentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type personnel_paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type personnel_paymentMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type personnel_paymentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type facility_paymentCountOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_paymentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type facility_paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_paymentMinOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    has_registered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_paymentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type facility_complete_paymentCountOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_complete_paymentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type facility_complete_paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_complete_paymentMinOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    type_of_payment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facility_complete_paymentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type revokedTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type revokedTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type revokedTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type revokedTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type revokedTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSectorFilter<$PrismaModel = never> = {
    equals?: $Enums.Sector | EnumSectorFieldRefInput<$PrismaModel>
    in?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    not?: NestedEnumSectorFilter<$PrismaModel> | $Enums.Sector
  }

  export type EnumFacility_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Facility_Type | EnumFacility_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacility_TypeFilter<$PrismaModel> | $Enums.Facility_Type
  }

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Inspection_reviewListRelationFilter = {
    every?: inspection_reviewWhereInput
    some?: inspection_reviewWhereInput
    none?: inspection_reviewWhereInput
  }

  export type InspectorNullableRelationFilter = {
    is?: inspectorWhereInput | null
    isNot?: inspectorWhereInput | null
  }

  export type inspection_reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type facilityCountOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrder
    owner_passport?: SortOrder
    owner_email?: SortOrder
    owner_gender?: SortOrder
    lga?: SortOrder
    facility_sector?: SortOrder
    facility_type?: SortOrder
    facility_level?: SortOrder
    personnel_incharge?: SortOrder
    personnel_incharge_name?: SortOrder
    personnel_incharge_practice_id?: SortOrder
    supervising_doctor_name?: SortOrder
    supervising_doctor_practice_id?: SortOrder
    services_offered?: SortOrder
    landmark?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    tax_clearance_certificate?: SortOrder
    compliance_certificate?: SortOrder
    facility_personnel_count?: SortOrder
    expiry_date?: SortOrder
    enugu_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    assigned_inspector?: SortOrder
    inspection_date?: SortOrder
    is_inspected?: SortOrder
    certificate_url?: SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facilityAvgOrderByAggregateInput = {
    id?: SortOrder
    number_of_bed?: SortOrder
    assigned_inspector?: SortOrder
  }

  export type facilityMaxOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrder
    owner_passport?: SortOrder
    owner_email?: SortOrder
    owner_gender?: SortOrder
    lga?: SortOrder
    facility_sector?: SortOrder
    facility_type?: SortOrder
    facility_level?: SortOrder
    personnel_incharge?: SortOrder
    personnel_incharge_name?: SortOrder
    personnel_incharge_practice_id?: SortOrder
    supervising_doctor_name?: SortOrder
    supervising_doctor_practice_id?: SortOrder
    services_offered?: SortOrder
    landmark?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    tax_clearance_certificate?: SortOrder
    compliance_certificate?: SortOrder
    expiry_date?: SortOrder
    enugu_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    assigned_inspector?: SortOrder
    inspection_date?: SortOrder
    is_inspected?: SortOrder
    certificate_url?: SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facilityMinOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrder
    owner_passport?: SortOrder
    owner_email?: SortOrder
    owner_gender?: SortOrder
    lga?: SortOrder
    facility_sector?: SortOrder
    facility_type?: SortOrder
    facility_level?: SortOrder
    personnel_incharge?: SortOrder
    personnel_incharge_name?: SortOrder
    personnel_incharge_practice_id?: SortOrder
    supervising_doctor_name?: SortOrder
    supervising_doctor_practice_id?: SortOrder
    services_offered?: SortOrder
    landmark?: SortOrder
    number_of_bed?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    site_plan?: SortOrder
    building_plan?: SortOrder
    tax_clearance_certificate?: SortOrder
    compliance_certificate?: SortOrder
    expiry_date?: SortOrder
    enugu_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    assigned_inspector?: SortOrder
    inspection_date?: SortOrder
    is_inspected?: SortOrder
    certificate_url?: SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type facilitySumOrderByAggregateInput = {
    id?: SortOrder
    number_of_bed?: SortOrder
    assigned_inspector?: SortOrder
  }

  export type EnumSectorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sector | EnumSectorFieldRefInput<$PrismaModel>
    in?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    not?: NestedEnumSectorWithAggregatesFilter<$PrismaModel> | $Enums.Sector
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectorFilter<$PrismaModel>
    _max?: NestedEnumSectorFilter<$PrismaModel>
  }

  export type EnumFacility_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Facility_Type | EnumFacility_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacility_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Facility_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacility_TypeFilter<$PrismaModel>
    _max?: NestedEnumFacility_TypeFilter<$PrismaModel>
  }

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type facility_personnelCountOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    user_id?: SortOrder
    enugu_practice_id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type facility_personnelAvgOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    user_id?: SortOrder
  }

  export type facility_personnelMaxOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    user_id?: SortOrder
    enugu_practice_id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type facility_personnelMinOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    user_id?: SortOrder
    enugu_practice_id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type facility_personnelSumOrderByAggregateInput = {
    id?: SortOrder
    facility_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableFilter<$PrismaModel> | $Enums.Category | null
  }

  export type food_facilityCountOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrder
    owner_email?: SortOrder
    lga?: SortOrder
    landmark?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    category?: SortOrder
    facility_personnel_count?: SortOrder
    expiry_date?: SortOrder
    enugu_food_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_facilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type food_facilityMaxOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrder
    owner_email?: SortOrder
    lga?: SortOrder
    landmark?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    category?: SortOrder
    expiry_date?: SortOrder
    enugu_food_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_facilityMinOrderByAggregateInput = {
    id?: SortOrder
    facility_name?: SortOrder
    location?: SortOrder
    cac?: SortOrder
    cac_image?: SortOrder
    owner_name?: SortOrder
    owner_phone_number?: SortOrder
    owner_contact_address?: SortOrder
    owner_nin?: SortOrder
    owner_nin_image?: SortOrder
    owner_email?: SortOrder
    lga?: SortOrder
    landmark?: SortOrder
    source_of_water?: SortOrder
    method_of_disposal?: SortOrder
    category?: SortOrder
    expiry_date?: SortOrder
    enugu_food_facility_id?: SortOrder
    reference?: SortOrder
    current_reference?: SortOrder
    password?: SortOrder
    reset_password_token?: SortOrder
    cac_status?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type food_facilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoryNullableFilter<$PrismaModel>
  }

  export type Food_facilityRelationFilter = {
    is?: food_facilityWhereInput
    isNot?: food_facilityWhereInput
  }

  export type Food_handlersRelationFilter = {
    is?: food_handlersWhereInput
    isNot?: food_handlersWhereInput
  }

  export type food_facility_personnelCountOrderByAggregateInput = {
    id?: SortOrder
    food_facility_id?: SortOrder
    food_handler_id?: SortOrder
    enugu_handler_id?: SortOrder
    createdAt?: SortOrder
  }

  export type food_facility_personnelAvgOrderByAggregateInput = {
    id?: SortOrder
    food_facility_id?: SortOrder
    food_handler_id?: SortOrder
  }

  export type food_facility_personnelMaxOrderByAggregateInput = {
    id?: SortOrder
    food_facility_id?: SortOrder
    food_handler_id?: SortOrder
    enugu_handler_id?: SortOrder
    createdAt?: SortOrder
  }

  export type food_facility_personnelMinOrderByAggregateInput = {
    id?: SortOrder
    food_facility_id?: SortOrder
    food_handler_id?: SortOrder
    enugu_handler_id?: SortOrder
    createdAt?: SortOrder
  }

  export type food_facility_personnelSumOrderByAggregateInput = {
    id?: SortOrder
    food_facility_id?: SortOrder
    food_handler_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type facilityCreateNestedOneWithoutInspection_reviewInput = {
    create?: XOR<facilityCreateWithoutInspection_reviewInput, facilityUncheckedCreateWithoutInspection_reviewInput>
    connectOrCreate?: facilityCreateOrConnectWithoutInspection_reviewInput
    connect?: facilityWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type facilityUpdateOneRequiredWithoutInspection_reviewNestedInput = {
    create?: XOR<facilityCreateWithoutInspection_reviewInput, facilityUncheckedCreateWithoutInspection_reviewInput>
    connectOrCreate?: facilityCreateOrConnectWithoutInspection_reviewInput
    upsert?: facilityUpsertWithoutInspection_reviewInput
    connect?: facilityWhereUniqueInput
    update?: XOR<XOR<facilityUpdateToOneWithWhereWithoutInspection_reviewInput, facilityUpdateWithoutInspection_reviewInput>, facilityUncheckedUpdateWithoutInspection_reviewInput>
  }

  export type facilityCreateNestedManyWithoutInspectorInput = {
    create?: XOR<facilityCreateWithoutInspectorInput, facilityUncheckedCreateWithoutInspectorInput> | facilityCreateWithoutInspectorInput[] | facilityUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: facilityCreateOrConnectWithoutInspectorInput | facilityCreateOrConnectWithoutInspectorInput[]
    createMany?: facilityCreateManyInspectorInputEnvelope
    connect?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
  }

  export type facilityUncheckedCreateNestedManyWithoutInspectorInput = {
    create?: XOR<facilityCreateWithoutInspectorInput, facilityUncheckedCreateWithoutInspectorInput> | facilityCreateWithoutInspectorInput[] | facilityUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: facilityCreateOrConnectWithoutInspectorInput | facilityCreateOrConnectWithoutInspectorInput[]
    createMany?: facilityCreateManyInspectorInputEnvelope
    connect?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
  }

  export type facilityUpdateManyWithoutInspectorNestedInput = {
    create?: XOR<facilityCreateWithoutInspectorInput, facilityUncheckedCreateWithoutInspectorInput> | facilityCreateWithoutInspectorInput[] | facilityUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: facilityCreateOrConnectWithoutInspectorInput | facilityCreateOrConnectWithoutInspectorInput[]
    upsert?: facilityUpsertWithWhereUniqueWithoutInspectorInput | facilityUpsertWithWhereUniqueWithoutInspectorInput[]
    createMany?: facilityCreateManyInspectorInputEnvelope
    set?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    disconnect?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    delete?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    connect?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    update?: facilityUpdateWithWhereUniqueWithoutInspectorInput | facilityUpdateWithWhereUniqueWithoutInspectorInput[]
    updateMany?: facilityUpdateManyWithWhereWithoutInspectorInput | facilityUpdateManyWithWhereWithoutInspectorInput[]
    deleteMany?: facilityScalarWhereInput | facilityScalarWhereInput[]
  }

  export type facilityUncheckedUpdateManyWithoutInspectorNestedInput = {
    create?: XOR<facilityCreateWithoutInspectorInput, facilityUncheckedCreateWithoutInspectorInput> | facilityCreateWithoutInspectorInput[] | facilityUncheckedCreateWithoutInspectorInput[]
    connectOrCreate?: facilityCreateOrConnectWithoutInspectorInput | facilityCreateOrConnectWithoutInspectorInput[]
    upsert?: facilityUpsertWithWhereUniqueWithoutInspectorInput | facilityUpsertWithWhereUniqueWithoutInspectorInput[]
    createMany?: facilityCreateManyInspectorInputEnvelope
    set?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    disconnect?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    delete?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    connect?: facilityWhereUniqueInput | facilityWhereUniqueInput[]
    update?: facilityUpdateWithWhereUniqueWithoutInspectorInput | facilityUpdateWithWhereUniqueWithoutInspectorInput[]
    updateMany?: facilityUpdateManyWithWhereWithoutInspectorInput | facilityUpdateManyWithWhereWithoutInspectorInput[]
    deleteMany?: facilityScalarWhereInput | facilityScalarWhereInput[]
  }

  export type local_governmentCreateNestedManyWithoutStateInput = {
    create?: XOR<local_governmentCreateWithoutStateInput, local_governmentUncheckedCreateWithoutStateInput> | local_governmentCreateWithoutStateInput[] | local_governmentUncheckedCreateWithoutStateInput[]
    connectOrCreate?: local_governmentCreateOrConnectWithoutStateInput | local_governmentCreateOrConnectWithoutStateInput[]
    createMany?: local_governmentCreateManyStateInputEnvelope
    connect?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
  }

  export type local_governmentUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<local_governmentCreateWithoutStateInput, local_governmentUncheckedCreateWithoutStateInput> | local_governmentCreateWithoutStateInput[] | local_governmentUncheckedCreateWithoutStateInput[]
    connectOrCreate?: local_governmentCreateOrConnectWithoutStateInput | local_governmentCreateOrConnectWithoutStateInput[]
    createMany?: local_governmentCreateManyStateInputEnvelope
    connect?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
  }

  export type local_governmentUpdateManyWithoutStateNestedInput = {
    create?: XOR<local_governmentCreateWithoutStateInput, local_governmentUncheckedCreateWithoutStateInput> | local_governmentCreateWithoutStateInput[] | local_governmentUncheckedCreateWithoutStateInput[]
    connectOrCreate?: local_governmentCreateOrConnectWithoutStateInput | local_governmentCreateOrConnectWithoutStateInput[]
    upsert?: local_governmentUpsertWithWhereUniqueWithoutStateInput | local_governmentUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: local_governmentCreateManyStateInputEnvelope
    set?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    disconnect?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    delete?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    connect?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    update?: local_governmentUpdateWithWhereUniqueWithoutStateInput | local_governmentUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: local_governmentUpdateManyWithWhereWithoutStateInput | local_governmentUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: local_governmentScalarWhereInput | local_governmentScalarWhereInput[]
  }

  export type local_governmentUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<local_governmentCreateWithoutStateInput, local_governmentUncheckedCreateWithoutStateInput> | local_governmentCreateWithoutStateInput[] | local_governmentUncheckedCreateWithoutStateInput[]
    connectOrCreate?: local_governmentCreateOrConnectWithoutStateInput | local_governmentCreateOrConnectWithoutStateInput[]
    upsert?: local_governmentUpsertWithWhereUniqueWithoutStateInput | local_governmentUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: local_governmentCreateManyStateInputEnvelope
    set?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    disconnect?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    delete?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    connect?: local_governmentWhereUniqueInput | local_governmentWhereUniqueInput[]
    update?: local_governmentUpdateWithWhereUniqueWithoutStateInput | local_governmentUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: local_governmentUpdateManyWithWhereWithoutStateInput | local_governmentUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: local_governmentScalarWhereInput | local_governmentScalarWhereInput[]
  }

  export type stateCreateNestedOneWithoutLocal_governmentInput = {
    create?: XOR<stateCreateWithoutLocal_governmentInput, stateUncheckedCreateWithoutLocal_governmentInput>
    connectOrCreate?: stateCreateOrConnectWithoutLocal_governmentInput
    connect?: stateWhereUniqueInput
  }

  export type stateUpdateOneRequiredWithoutLocal_governmentNestedInput = {
    create?: XOR<stateCreateWithoutLocal_governmentInput, stateUncheckedCreateWithoutLocal_governmentInput>
    connectOrCreate?: stateCreateOrConnectWithoutLocal_governmentInput
    upsert?: stateUpsertWithoutLocal_governmentInput
    connect?: stateWhereUniqueInput
    update?: XOR<XOR<stateUpdateToOneWithWhereWithoutLocal_governmentInput, stateUpdateWithoutLocal_governmentInput>, stateUncheckedUpdateWithoutLocal_governmentInput>
  }

  export type facility_personnelCreateNestedManyWithoutUserInput = {
    create?: XOR<facility_personnelCreateWithoutUserInput, facility_personnelUncheckedCreateWithoutUserInput> | facility_personnelCreateWithoutUserInput[] | facility_personnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutUserInput | facility_personnelCreateOrConnectWithoutUserInput[]
    createMany?: facility_personnelCreateManyUserInputEnvelope
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
  }

  export type facility_personnelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<facility_personnelCreateWithoutUserInput, facility_personnelUncheckedCreateWithoutUserInput> | facility_personnelCreateWithoutUserInput[] | facility_personnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutUserInput | facility_personnelCreateOrConnectWithoutUserInput[]
    createMany?: facility_personnelCreateManyUserInputEnvelope
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type facility_personnelUpdateManyWithoutUserNestedInput = {
    create?: XOR<facility_personnelCreateWithoutUserInput, facility_personnelUncheckedCreateWithoutUserInput> | facility_personnelCreateWithoutUserInput[] | facility_personnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutUserInput | facility_personnelCreateOrConnectWithoutUserInput[]
    upsert?: facility_personnelUpsertWithWhereUniqueWithoutUserInput | facility_personnelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: facility_personnelCreateManyUserInputEnvelope
    set?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    disconnect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    delete?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    update?: facility_personnelUpdateWithWhereUniqueWithoutUserInput | facility_personnelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: facility_personnelUpdateManyWithWhereWithoutUserInput | facility_personnelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: facility_personnelScalarWhereInput | facility_personnelScalarWhereInput[]
  }

  export type facility_personnelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<facility_personnelCreateWithoutUserInput, facility_personnelUncheckedCreateWithoutUserInput> | facility_personnelCreateWithoutUserInput[] | facility_personnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutUserInput | facility_personnelCreateOrConnectWithoutUserInput[]
    upsert?: facility_personnelUpsertWithWhereUniqueWithoutUserInput | facility_personnelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: facility_personnelCreateManyUserInputEnvelope
    set?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    disconnect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    delete?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    update?: facility_personnelUpdateWithWhereUniqueWithoutUserInput | facility_personnelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: facility_personnelUpdateManyWithWhereWithoutUserInput | facility_personnelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: facility_personnelScalarWhereInput | facility_personnelScalarWhereInput[]
  }

  export type food_facility_personnelCreateNestedManyWithoutFood_handlerInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_handlerInput, food_facility_personnelUncheckedCreateWithoutFood_handlerInput> | food_facility_personnelCreateWithoutFood_handlerInput[] | food_facility_personnelUncheckedCreateWithoutFood_handlerInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_handlerInput | food_facility_personnelCreateOrConnectWithoutFood_handlerInput[]
    createMany?: food_facility_personnelCreateManyFood_handlerInputEnvelope
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
  }

  export type food_facility_personnelUncheckedCreateNestedManyWithoutFood_handlerInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_handlerInput, food_facility_personnelUncheckedCreateWithoutFood_handlerInput> | food_facility_personnelCreateWithoutFood_handlerInput[] | food_facility_personnelUncheckedCreateWithoutFood_handlerInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_handlerInput | food_facility_personnelCreateOrConnectWithoutFood_handlerInput[]
    createMany?: food_facility_personnelCreateManyFood_handlerInputEnvelope
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
  }

  export type food_facility_personnelUpdateManyWithoutFood_handlerNestedInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_handlerInput, food_facility_personnelUncheckedCreateWithoutFood_handlerInput> | food_facility_personnelCreateWithoutFood_handlerInput[] | food_facility_personnelUncheckedCreateWithoutFood_handlerInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_handlerInput | food_facility_personnelCreateOrConnectWithoutFood_handlerInput[]
    upsert?: food_facility_personnelUpsertWithWhereUniqueWithoutFood_handlerInput | food_facility_personnelUpsertWithWhereUniqueWithoutFood_handlerInput[]
    createMany?: food_facility_personnelCreateManyFood_handlerInputEnvelope
    set?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    disconnect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    delete?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    update?: food_facility_personnelUpdateWithWhereUniqueWithoutFood_handlerInput | food_facility_personnelUpdateWithWhereUniqueWithoutFood_handlerInput[]
    updateMany?: food_facility_personnelUpdateManyWithWhereWithoutFood_handlerInput | food_facility_personnelUpdateManyWithWhereWithoutFood_handlerInput[]
    deleteMany?: food_facility_personnelScalarWhereInput | food_facility_personnelScalarWhereInput[]
  }

  export type food_facility_personnelUncheckedUpdateManyWithoutFood_handlerNestedInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_handlerInput, food_facility_personnelUncheckedCreateWithoutFood_handlerInput> | food_facility_personnelCreateWithoutFood_handlerInput[] | food_facility_personnelUncheckedCreateWithoutFood_handlerInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_handlerInput | food_facility_personnelCreateOrConnectWithoutFood_handlerInput[]
    upsert?: food_facility_personnelUpsertWithWhereUniqueWithoutFood_handlerInput | food_facility_personnelUpsertWithWhereUniqueWithoutFood_handlerInput[]
    createMany?: food_facility_personnelCreateManyFood_handlerInputEnvelope
    set?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    disconnect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    delete?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    update?: food_facility_personnelUpdateWithWhereUniqueWithoutFood_handlerInput | food_facility_personnelUpdateWithWhereUniqueWithoutFood_handlerInput[]
    updateMany?: food_facility_personnelUpdateManyWithWhereWithoutFood_handlerInput | food_facility_personnelUpdateManyWithWhereWithoutFood_handlerInput[]
    deleteMany?: food_facility_personnelScalarWhereInput | food_facility_personnelScalarWhereInput[]
  }

  export type facility_personnelCreateNestedManyWithoutFacilityInput = {
    create?: XOR<facility_personnelCreateWithoutFacilityInput, facility_personnelUncheckedCreateWithoutFacilityInput> | facility_personnelCreateWithoutFacilityInput[] | facility_personnelUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutFacilityInput | facility_personnelCreateOrConnectWithoutFacilityInput[]
    createMany?: facility_personnelCreateManyFacilityInputEnvelope
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
  }

  export type inspection_reviewCreateNestedManyWithoutFacilityInput = {
    create?: XOR<inspection_reviewCreateWithoutFacilityInput, inspection_reviewUncheckedCreateWithoutFacilityInput> | inspection_reviewCreateWithoutFacilityInput[] | inspection_reviewUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: inspection_reviewCreateOrConnectWithoutFacilityInput | inspection_reviewCreateOrConnectWithoutFacilityInput[]
    createMany?: inspection_reviewCreateManyFacilityInputEnvelope
    connect?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
  }

  export type inspectorCreateNestedOneWithoutFacilityInput = {
    create?: XOR<inspectorCreateWithoutFacilityInput, inspectorUncheckedCreateWithoutFacilityInput>
    connectOrCreate?: inspectorCreateOrConnectWithoutFacilityInput
    connect?: inspectorWhereUniqueInput
  }

  export type facility_personnelUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<facility_personnelCreateWithoutFacilityInput, facility_personnelUncheckedCreateWithoutFacilityInput> | facility_personnelCreateWithoutFacilityInput[] | facility_personnelUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutFacilityInput | facility_personnelCreateOrConnectWithoutFacilityInput[]
    createMany?: facility_personnelCreateManyFacilityInputEnvelope
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
  }

  export type inspection_reviewUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<inspection_reviewCreateWithoutFacilityInput, inspection_reviewUncheckedCreateWithoutFacilityInput> | inspection_reviewCreateWithoutFacilityInput[] | inspection_reviewUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: inspection_reviewCreateOrConnectWithoutFacilityInput | inspection_reviewCreateOrConnectWithoutFacilityInput[]
    createMany?: inspection_reviewCreateManyFacilityInputEnvelope
    connect?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
  }

  export type EnumSectorFieldUpdateOperationsInput = {
    set?: $Enums.Sector
  }

  export type EnumFacility_TypeFieldUpdateOperationsInput = {
    set?: $Enums.Facility_Type
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type facility_personnelUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<facility_personnelCreateWithoutFacilityInput, facility_personnelUncheckedCreateWithoutFacilityInput> | facility_personnelCreateWithoutFacilityInput[] | facility_personnelUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutFacilityInput | facility_personnelCreateOrConnectWithoutFacilityInput[]
    upsert?: facility_personnelUpsertWithWhereUniqueWithoutFacilityInput | facility_personnelUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: facility_personnelCreateManyFacilityInputEnvelope
    set?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    disconnect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    delete?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    update?: facility_personnelUpdateWithWhereUniqueWithoutFacilityInput | facility_personnelUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: facility_personnelUpdateManyWithWhereWithoutFacilityInput | facility_personnelUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: facility_personnelScalarWhereInput | facility_personnelScalarWhereInput[]
  }

  export type inspection_reviewUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<inspection_reviewCreateWithoutFacilityInput, inspection_reviewUncheckedCreateWithoutFacilityInput> | inspection_reviewCreateWithoutFacilityInput[] | inspection_reviewUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: inspection_reviewCreateOrConnectWithoutFacilityInput | inspection_reviewCreateOrConnectWithoutFacilityInput[]
    upsert?: inspection_reviewUpsertWithWhereUniqueWithoutFacilityInput | inspection_reviewUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: inspection_reviewCreateManyFacilityInputEnvelope
    set?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    disconnect?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    delete?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    connect?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    update?: inspection_reviewUpdateWithWhereUniqueWithoutFacilityInput | inspection_reviewUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: inspection_reviewUpdateManyWithWhereWithoutFacilityInput | inspection_reviewUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: inspection_reviewScalarWhereInput | inspection_reviewScalarWhereInput[]
  }

  export type inspectorUpdateOneWithoutFacilityNestedInput = {
    create?: XOR<inspectorCreateWithoutFacilityInput, inspectorUncheckedCreateWithoutFacilityInput>
    connectOrCreate?: inspectorCreateOrConnectWithoutFacilityInput
    upsert?: inspectorUpsertWithoutFacilityInput
    disconnect?: inspectorWhereInput | boolean
    delete?: inspectorWhereInput | boolean
    connect?: inspectorWhereUniqueInput
    update?: XOR<XOR<inspectorUpdateToOneWithWhereWithoutFacilityInput, inspectorUpdateWithoutFacilityInput>, inspectorUncheckedUpdateWithoutFacilityInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type facility_personnelUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<facility_personnelCreateWithoutFacilityInput, facility_personnelUncheckedCreateWithoutFacilityInput> | facility_personnelCreateWithoutFacilityInput[] | facility_personnelUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_personnelCreateOrConnectWithoutFacilityInput | facility_personnelCreateOrConnectWithoutFacilityInput[]
    upsert?: facility_personnelUpsertWithWhereUniqueWithoutFacilityInput | facility_personnelUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: facility_personnelCreateManyFacilityInputEnvelope
    set?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    disconnect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    delete?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    connect?: facility_personnelWhereUniqueInput | facility_personnelWhereUniqueInput[]
    update?: facility_personnelUpdateWithWhereUniqueWithoutFacilityInput | facility_personnelUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: facility_personnelUpdateManyWithWhereWithoutFacilityInput | facility_personnelUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: facility_personnelScalarWhereInput | facility_personnelScalarWhereInput[]
  }

  export type inspection_reviewUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<inspection_reviewCreateWithoutFacilityInput, inspection_reviewUncheckedCreateWithoutFacilityInput> | inspection_reviewCreateWithoutFacilityInput[] | inspection_reviewUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: inspection_reviewCreateOrConnectWithoutFacilityInput | inspection_reviewCreateOrConnectWithoutFacilityInput[]
    upsert?: inspection_reviewUpsertWithWhereUniqueWithoutFacilityInput | inspection_reviewUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: inspection_reviewCreateManyFacilityInputEnvelope
    set?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    disconnect?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    delete?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    connect?: inspection_reviewWhereUniqueInput | inspection_reviewWhereUniqueInput[]
    update?: inspection_reviewUpdateWithWhereUniqueWithoutFacilityInput | inspection_reviewUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: inspection_reviewUpdateManyWithWhereWithoutFacilityInput | inspection_reviewUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: inspection_reviewScalarWhereInput | inspection_reviewScalarWhereInput[]
  }

  export type facilityCreateNestedOneWithoutFacility_personnelInput = {
    create?: XOR<facilityCreateWithoutFacility_personnelInput, facilityUncheckedCreateWithoutFacility_personnelInput>
    connectOrCreate?: facilityCreateOrConnectWithoutFacility_personnelInput
    connect?: facilityWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFacility_personnelInput = {
    create?: XOR<usersCreateWithoutFacility_personnelInput, usersUncheckedCreateWithoutFacility_personnelInput>
    connectOrCreate?: usersCreateOrConnectWithoutFacility_personnelInput
    connect?: usersWhereUniqueInput
  }

  export type facilityUpdateOneRequiredWithoutFacility_personnelNestedInput = {
    create?: XOR<facilityCreateWithoutFacility_personnelInput, facilityUncheckedCreateWithoutFacility_personnelInput>
    connectOrCreate?: facilityCreateOrConnectWithoutFacility_personnelInput
    upsert?: facilityUpsertWithoutFacility_personnelInput
    connect?: facilityWhereUniqueInput
    update?: XOR<XOR<facilityUpdateToOneWithWhereWithoutFacility_personnelInput, facilityUpdateWithoutFacility_personnelInput>, facilityUncheckedUpdateWithoutFacility_personnelInput>
  }

  export type usersUpdateOneRequiredWithoutFacility_personnelNestedInput = {
    create?: XOR<usersCreateWithoutFacility_personnelInput, usersUncheckedCreateWithoutFacility_personnelInput>
    connectOrCreate?: usersCreateOrConnectWithoutFacility_personnelInput
    upsert?: usersUpsertWithoutFacility_personnelInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFacility_personnelInput, usersUpdateWithoutFacility_personnelInput>, usersUncheckedUpdateWithoutFacility_personnelInput>
  }

  export type food_facility_personnelCreateNestedManyWithoutFood_facilityInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_facilityInput, food_facility_personnelUncheckedCreateWithoutFood_facilityInput> | food_facility_personnelCreateWithoutFood_facilityInput[] | food_facility_personnelUncheckedCreateWithoutFood_facilityInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_facilityInput | food_facility_personnelCreateOrConnectWithoutFood_facilityInput[]
    createMany?: food_facility_personnelCreateManyFood_facilityInputEnvelope
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
  }

  export type food_facility_personnelUncheckedCreateNestedManyWithoutFood_facilityInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_facilityInput, food_facility_personnelUncheckedCreateWithoutFood_facilityInput> | food_facility_personnelCreateWithoutFood_facilityInput[] | food_facility_personnelUncheckedCreateWithoutFood_facilityInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_facilityInput | food_facility_personnelCreateOrConnectWithoutFood_facilityInput[]
    createMany?: food_facility_personnelCreateManyFood_facilityInputEnvelope
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
  }

  export type NullableEnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category | null
  }

  export type food_facility_personnelUpdateManyWithoutFood_facilityNestedInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_facilityInput, food_facility_personnelUncheckedCreateWithoutFood_facilityInput> | food_facility_personnelCreateWithoutFood_facilityInput[] | food_facility_personnelUncheckedCreateWithoutFood_facilityInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_facilityInput | food_facility_personnelCreateOrConnectWithoutFood_facilityInput[]
    upsert?: food_facility_personnelUpsertWithWhereUniqueWithoutFood_facilityInput | food_facility_personnelUpsertWithWhereUniqueWithoutFood_facilityInput[]
    createMany?: food_facility_personnelCreateManyFood_facilityInputEnvelope
    set?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    disconnect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    delete?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    update?: food_facility_personnelUpdateWithWhereUniqueWithoutFood_facilityInput | food_facility_personnelUpdateWithWhereUniqueWithoutFood_facilityInput[]
    updateMany?: food_facility_personnelUpdateManyWithWhereWithoutFood_facilityInput | food_facility_personnelUpdateManyWithWhereWithoutFood_facilityInput[]
    deleteMany?: food_facility_personnelScalarWhereInput | food_facility_personnelScalarWhereInput[]
  }

  export type food_facility_personnelUncheckedUpdateManyWithoutFood_facilityNestedInput = {
    create?: XOR<food_facility_personnelCreateWithoutFood_facilityInput, food_facility_personnelUncheckedCreateWithoutFood_facilityInput> | food_facility_personnelCreateWithoutFood_facilityInput[] | food_facility_personnelUncheckedCreateWithoutFood_facilityInput[]
    connectOrCreate?: food_facility_personnelCreateOrConnectWithoutFood_facilityInput | food_facility_personnelCreateOrConnectWithoutFood_facilityInput[]
    upsert?: food_facility_personnelUpsertWithWhereUniqueWithoutFood_facilityInput | food_facility_personnelUpsertWithWhereUniqueWithoutFood_facilityInput[]
    createMany?: food_facility_personnelCreateManyFood_facilityInputEnvelope
    set?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    disconnect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    delete?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    connect?: food_facility_personnelWhereUniqueInput | food_facility_personnelWhereUniqueInput[]
    update?: food_facility_personnelUpdateWithWhereUniqueWithoutFood_facilityInput | food_facility_personnelUpdateWithWhereUniqueWithoutFood_facilityInput[]
    updateMany?: food_facility_personnelUpdateManyWithWhereWithoutFood_facilityInput | food_facility_personnelUpdateManyWithWhereWithoutFood_facilityInput[]
    deleteMany?: food_facility_personnelScalarWhereInput | food_facility_personnelScalarWhereInput[]
  }

  export type food_facilityCreateNestedOneWithoutFood_facility_personnelInput = {
    create?: XOR<food_facilityCreateWithoutFood_facility_personnelInput, food_facilityUncheckedCreateWithoutFood_facility_personnelInput>
    connectOrCreate?: food_facilityCreateOrConnectWithoutFood_facility_personnelInput
    connect?: food_facilityWhereUniqueInput
  }

  export type food_handlersCreateNestedOneWithoutFood_facility_personnelInput = {
    create?: XOR<food_handlersCreateWithoutFood_facility_personnelInput, food_handlersUncheckedCreateWithoutFood_facility_personnelInput>
    connectOrCreate?: food_handlersCreateOrConnectWithoutFood_facility_personnelInput
    connect?: food_handlersWhereUniqueInput
  }

  export type food_facilityUpdateOneRequiredWithoutFood_facility_personnelNestedInput = {
    create?: XOR<food_facilityCreateWithoutFood_facility_personnelInput, food_facilityUncheckedCreateWithoutFood_facility_personnelInput>
    connectOrCreate?: food_facilityCreateOrConnectWithoutFood_facility_personnelInput
    upsert?: food_facilityUpsertWithoutFood_facility_personnelInput
    connect?: food_facilityWhereUniqueInput
    update?: XOR<XOR<food_facilityUpdateToOneWithWhereWithoutFood_facility_personnelInput, food_facilityUpdateWithoutFood_facility_personnelInput>, food_facilityUncheckedUpdateWithoutFood_facility_personnelInput>
  }

  export type food_handlersUpdateOneRequiredWithoutFood_facility_personnelNestedInput = {
    create?: XOR<food_handlersCreateWithoutFood_facility_personnelInput, food_handlersUncheckedCreateWithoutFood_facility_personnelInput>
    connectOrCreate?: food_handlersCreateOrConnectWithoutFood_facility_personnelInput
    upsert?: food_handlersUpsertWithoutFood_facility_personnelInput
    connect?: food_handlersWhereUniqueInput
    update?: XOR<XOR<food_handlersUpdateToOneWithWhereWithoutFood_facility_personnelInput, food_handlersUpdateWithoutFood_facility_personnelInput>, food_handlersUncheckedUpdateWithoutFood_facility_personnelInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumSectorFilter<$PrismaModel = never> = {
    equals?: $Enums.Sector | EnumSectorFieldRefInput<$PrismaModel>
    in?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    not?: NestedEnumSectorFilter<$PrismaModel> | $Enums.Sector
  }

  export type NestedEnumFacility_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Facility_Type | EnumFacility_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacility_TypeFilter<$PrismaModel> | $Enums.Facility_Type
  }

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSectorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sector | EnumSectorFieldRefInput<$PrismaModel>
    in?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sector[] | ListEnumSectorFieldRefInput<$PrismaModel>
    not?: NestedEnumSectorWithAggregatesFilter<$PrismaModel> | $Enums.Sector
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectorFilter<$PrismaModel>
    _max?: NestedEnumSectorFilter<$PrismaModel>
  }

  export type NestedEnumFacility_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Facility_Type | EnumFacility_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Facility_Type[] | ListEnumFacility_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacility_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Facility_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacility_TypeFilter<$PrismaModel>
    _max?: NestedEnumFacility_TypeFilter<$PrismaModel>
  }

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableFilter<$PrismaModel> | $Enums.Category | null
  }

  export type NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoryNullableFilter<$PrismaModel>
  }

  export type facilityCreateWithoutInspection_reviewInput = {
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelCreateNestedManyWithoutFacilityInput
    inspector?: inspectorCreateNestedOneWithoutFacilityInput
  }

  export type facilityUncheckedCreateWithoutInspection_reviewInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    assigned_inspector?: number | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityCreateOrConnectWithoutInspection_reviewInput = {
    where: facilityWhereUniqueInput
    create: XOR<facilityCreateWithoutInspection_reviewInput, facilityUncheckedCreateWithoutInspection_reviewInput>
  }

  export type facilityUpsertWithoutInspection_reviewInput = {
    update: XOR<facilityUpdateWithoutInspection_reviewInput, facilityUncheckedUpdateWithoutInspection_reviewInput>
    create: XOR<facilityCreateWithoutInspection_reviewInput, facilityUncheckedCreateWithoutInspection_reviewInput>
    where?: facilityWhereInput
  }

  export type facilityUpdateToOneWithWhereWithoutInspection_reviewInput = {
    where?: facilityWhereInput
    data: XOR<facilityUpdateWithoutInspection_reviewInput, facilityUncheckedUpdateWithoutInspection_reviewInput>
  }

  export type facilityUpdateWithoutInspection_reviewInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUpdateManyWithoutFacilityNestedInput
    inspector?: inspectorUpdateOneWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateWithoutInspection_reviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_inspector?: NullableIntFieldUpdateOperationsInput | number | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type facilityCreateWithoutInspectorInput = {
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelCreateNestedManyWithoutFacilityInput
    inspection_review?: inspection_reviewCreateNestedManyWithoutFacilityInput
  }

  export type facilityUncheckedCreateWithoutInspectorInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    facility_personnel?: facility_personnelUncheckedCreateNestedManyWithoutFacilityInput
    inspection_review?: inspection_reviewUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityCreateOrConnectWithoutInspectorInput = {
    where: facilityWhereUniqueInput
    create: XOR<facilityCreateWithoutInspectorInput, facilityUncheckedCreateWithoutInspectorInput>
  }

  export type facilityCreateManyInspectorInputEnvelope = {
    data: facilityCreateManyInspectorInput | facilityCreateManyInspectorInput[]
    skipDuplicates?: boolean
  }

  export type facilityUpsertWithWhereUniqueWithoutInspectorInput = {
    where: facilityWhereUniqueInput
    update: XOR<facilityUpdateWithoutInspectorInput, facilityUncheckedUpdateWithoutInspectorInput>
    create: XOR<facilityCreateWithoutInspectorInput, facilityUncheckedCreateWithoutInspectorInput>
  }

  export type facilityUpdateWithWhereUniqueWithoutInspectorInput = {
    where: facilityWhereUniqueInput
    data: XOR<facilityUpdateWithoutInspectorInput, facilityUncheckedUpdateWithoutInspectorInput>
  }

  export type facilityUpdateManyWithWhereWithoutInspectorInput = {
    where: facilityScalarWhereInput
    data: XOR<facilityUpdateManyMutationInput, facilityUncheckedUpdateManyWithoutInspectorInput>
  }

  export type facilityScalarWhereInput = {
    AND?: facilityScalarWhereInput | facilityScalarWhereInput[]
    OR?: facilityScalarWhereInput[]
    NOT?: facilityScalarWhereInput | facilityScalarWhereInput[]
    id?: IntFilter<"facility"> | number
    facility_name?: StringFilter<"facility"> | string
    location?: StringFilter<"facility"> | string
    cac?: StringFilter<"facility"> | string
    cac_image?: StringNullableFilter<"facility"> | string | null
    owner_name?: StringFilter<"facility"> | string
    owner_phone_number?: StringFilter<"facility"> | string
    owner_contact_address?: StringFilter<"facility"> | string
    owner_nin?: StringFilter<"facility"> | string
    owner_nin_image?: StringNullableFilter<"facility"> | string | null
    owner_passport?: StringNullableFilter<"facility"> | string | null
    owner_email?: StringFilter<"facility"> | string
    owner_gender?: StringNullableFilter<"facility"> | string | null
    lga?: StringNullableFilter<"facility"> | string | null
    facility_sector?: EnumSectorFilter<"facility"> | $Enums.Sector
    facility_type?: EnumFacility_TypeFilter<"facility"> | $Enums.Facility_Type
    facility_level?: EnumLevelFilter<"facility"> | $Enums.Level
    personnel_incharge?: StringNullableFilter<"facility"> | string | null
    personnel_incharge_name?: StringNullableFilter<"facility"> | string | null
    personnel_incharge_practice_id?: StringNullableFilter<"facility"> | string | null
    supervising_doctor_name?: StringNullableFilter<"facility"> | string | null
    supervising_doctor_practice_id?: StringNullableFilter<"facility"> | string | null
    services_offered?: StringFilter<"facility"> | string
    landmark?: StringNullableFilter<"facility"> | string | null
    number_of_bed?: IntFilter<"facility"> | number
    source_of_water?: StringFilter<"facility"> | string
    method_of_disposal?: StringFilter<"facility"> | string
    site_plan?: StringFilter<"facility"> | string
    building_plan?: StringFilter<"facility"> | string
    tax_clearance_certificate?: StringFilter<"facility"> | string
    compliance_certificate?: StringNullableFilter<"facility"> | string | null
    facility_personnel_count?: JsonNullableFilter<"facility">
    expiry_date?: StringNullableFilter<"facility"> | string | null
    enugu_facility_id?: StringFilter<"facility"> | string
    reference?: StringFilter<"facility"> | string
    current_reference?: StringNullableFilter<"facility"> | string | null
    password?: StringNullableFilter<"facility"> | string | null
    reset_password_token?: StringNullableFilter<"facility"> | string | null
    assigned_inspector?: IntNullableFilter<"facility"> | number | null
    inspection_date?: DateTimeNullableFilter<"facility"> | Date | string | null
    is_inspected?: BoolFilter<"facility"> | boolean
    certificate_url?: StringNullableFilter<"facility"> | string | null
    cac_status?: EnumStatusFilter<"facility"> | $Enums.Status
    status?: EnumStatusFilter<"facility"> | $Enums.Status
    createdAt?: DateTimeFilter<"facility"> | Date | string
    updatedAt?: DateTimeFilter<"facility"> | Date | string
  }

  export type local_governmentCreateWithoutStateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type local_governmentUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type local_governmentCreateOrConnectWithoutStateInput = {
    where: local_governmentWhereUniqueInput
    create: XOR<local_governmentCreateWithoutStateInput, local_governmentUncheckedCreateWithoutStateInput>
  }

  export type local_governmentCreateManyStateInputEnvelope = {
    data: local_governmentCreateManyStateInput | local_governmentCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type local_governmentUpsertWithWhereUniqueWithoutStateInput = {
    where: local_governmentWhereUniqueInput
    update: XOR<local_governmentUpdateWithoutStateInput, local_governmentUncheckedUpdateWithoutStateInput>
    create: XOR<local_governmentCreateWithoutStateInput, local_governmentUncheckedCreateWithoutStateInput>
  }

  export type local_governmentUpdateWithWhereUniqueWithoutStateInput = {
    where: local_governmentWhereUniqueInput
    data: XOR<local_governmentUpdateWithoutStateInput, local_governmentUncheckedUpdateWithoutStateInput>
  }

  export type local_governmentUpdateManyWithWhereWithoutStateInput = {
    where: local_governmentScalarWhereInput
    data: XOR<local_governmentUpdateManyMutationInput, local_governmentUncheckedUpdateManyWithoutStateInput>
  }

  export type local_governmentScalarWhereInput = {
    AND?: local_governmentScalarWhereInput | local_governmentScalarWhereInput[]
    OR?: local_governmentScalarWhereInput[]
    NOT?: local_governmentScalarWhereInput | local_governmentScalarWhereInput[]
    id?: IntFilter<"local_government"> | number
    name?: StringFilter<"local_government"> | string
    state_id?: IntFilter<"local_government"> | number
    createdAt?: DateTimeFilter<"local_government"> | Date | string
    updatedAt?: DateTimeFilter<"local_government"> | Date | string
  }

  export type stateCreateWithoutLocal_governmentInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type stateUncheckedCreateWithoutLocal_governmentInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type stateCreateOrConnectWithoutLocal_governmentInput = {
    where: stateWhereUniqueInput
    create: XOR<stateCreateWithoutLocal_governmentInput, stateUncheckedCreateWithoutLocal_governmentInput>
  }

  export type stateUpsertWithoutLocal_governmentInput = {
    update: XOR<stateUpdateWithoutLocal_governmentInput, stateUncheckedUpdateWithoutLocal_governmentInput>
    create: XOR<stateCreateWithoutLocal_governmentInput, stateUncheckedCreateWithoutLocal_governmentInput>
    where?: stateWhereInput
  }

  export type stateUpdateToOneWithWhereWithoutLocal_governmentInput = {
    where?: stateWhereInput
    data: XOR<stateUpdateWithoutLocal_governmentInput, stateUncheckedUpdateWithoutLocal_governmentInput>
  }

  export type stateUpdateWithoutLocal_governmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stateUncheckedUpdateWithoutLocal_governmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelCreateWithoutUserInput = {
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
    facility: facilityCreateNestedOneWithoutFacility_personnelInput
  }

  export type facility_personnelUncheckedCreateWithoutUserInput = {
    id?: number
    facility_id: number
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
  }

  export type facility_personnelCreateOrConnectWithoutUserInput = {
    where: facility_personnelWhereUniqueInput
    create: XOR<facility_personnelCreateWithoutUserInput, facility_personnelUncheckedCreateWithoutUserInput>
  }

  export type facility_personnelCreateManyUserInputEnvelope = {
    data: facility_personnelCreateManyUserInput | facility_personnelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type facility_personnelUpsertWithWhereUniqueWithoutUserInput = {
    where: facility_personnelWhereUniqueInput
    update: XOR<facility_personnelUpdateWithoutUserInput, facility_personnelUncheckedUpdateWithoutUserInput>
    create: XOR<facility_personnelCreateWithoutUserInput, facility_personnelUncheckedCreateWithoutUserInput>
  }

  export type facility_personnelUpdateWithWhereUniqueWithoutUserInput = {
    where: facility_personnelWhereUniqueInput
    data: XOR<facility_personnelUpdateWithoutUserInput, facility_personnelUncheckedUpdateWithoutUserInput>
  }

  export type facility_personnelUpdateManyWithWhereWithoutUserInput = {
    where: facility_personnelScalarWhereInput
    data: XOR<facility_personnelUpdateManyMutationInput, facility_personnelUncheckedUpdateManyWithoutUserInput>
  }

  export type facility_personnelScalarWhereInput = {
    AND?: facility_personnelScalarWhereInput | facility_personnelScalarWhereInput[]
    OR?: facility_personnelScalarWhereInput[]
    NOT?: facility_personnelScalarWhereInput | facility_personnelScalarWhereInput[]
    id?: IntFilter<"facility_personnel"> | number
    facility_id?: IntFilter<"facility_personnel"> | number
    user_id?: IntFilter<"facility_personnel"> | number
    enugu_practice_id?: StringFilter<"facility_personnel"> | string
    type?: StringFilter<"facility_personnel"> | string
    createdAt?: DateTimeFilter<"facility_personnel"> | Date | string
  }

  export type food_facility_personnelCreateWithoutFood_handlerInput = {
    enugu_handler_id: string
    createdAt?: Date | string
    food_facility: food_facilityCreateNestedOneWithoutFood_facility_personnelInput
  }

  export type food_facility_personnelUncheckedCreateWithoutFood_handlerInput = {
    id?: number
    food_facility_id: number
    enugu_handler_id: string
    createdAt?: Date | string
  }

  export type food_facility_personnelCreateOrConnectWithoutFood_handlerInput = {
    where: food_facility_personnelWhereUniqueInput
    create: XOR<food_facility_personnelCreateWithoutFood_handlerInput, food_facility_personnelUncheckedCreateWithoutFood_handlerInput>
  }

  export type food_facility_personnelCreateManyFood_handlerInputEnvelope = {
    data: food_facility_personnelCreateManyFood_handlerInput | food_facility_personnelCreateManyFood_handlerInput[]
    skipDuplicates?: boolean
  }

  export type food_facility_personnelUpsertWithWhereUniqueWithoutFood_handlerInput = {
    where: food_facility_personnelWhereUniqueInput
    update: XOR<food_facility_personnelUpdateWithoutFood_handlerInput, food_facility_personnelUncheckedUpdateWithoutFood_handlerInput>
    create: XOR<food_facility_personnelCreateWithoutFood_handlerInput, food_facility_personnelUncheckedCreateWithoutFood_handlerInput>
  }

  export type food_facility_personnelUpdateWithWhereUniqueWithoutFood_handlerInput = {
    where: food_facility_personnelWhereUniqueInput
    data: XOR<food_facility_personnelUpdateWithoutFood_handlerInput, food_facility_personnelUncheckedUpdateWithoutFood_handlerInput>
  }

  export type food_facility_personnelUpdateManyWithWhereWithoutFood_handlerInput = {
    where: food_facility_personnelScalarWhereInput
    data: XOR<food_facility_personnelUpdateManyMutationInput, food_facility_personnelUncheckedUpdateManyWithoutFood_handlerInput>
  }

  export type food_facility_personnelScalarWhereInput = {
    AND?: food_facility_personnelScalarWhereInput | food_facility_personnelScalarWhereInput[]
    OR?: food_facility_personnelScalarWhereInput[]
    NOT?: food_facility_personnelScalarWhereInput | food_facility_personnelScalarWhereInput[]
    id?: IntFilter<"food_facility_personnel"> | number
    food_facility_id?: IntFilter<"food_facility_personnel"> | number
    food_handler_id?: IntFilter<"food_facility_personnel"> | number
    enugu_handler_id?: StringFilter<"food_facility_personnel"> | string
    createdAt?: DateTimeFilter<"food_facility_personnel"> | Date | string
  }

  export type facility_personnelCreateWithoutFacilityInput = {
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutFacility_personnelInput
  }

  export type facility_personnelUncheckedCreateWithoutFacilityInput = {
    id?: number
    user_id: number
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
  }

  export type facility_personnelCreateOrConnectWithoutFacilityInput = {
    where: facility_personnelWhereUniqueInput
    create: XOR<facility_personnelCreateWithoutFacilityInput, facility_personnelUncheckedCreateWithoutFacilityInput>
  }

  export type facility_personnelCreateManyFacilityInputEnvelope = {
    data: facility_personnelCreateManyFacilityInput | facility_personnelCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type inspection_reviewCreateWithoutFacilityInput = {
    cac: boolean
    owner_nin: boolean
    services_offered: boolean
    number_of_bed: boolean
    source_of_water: boolean
    method_of_disposal: boolean
    site_plan: boolean
    building_plan: boolean
    compliance_certificate?: boolean | null
    tax_clearance_certificate: boolean
    facility_personnel_count: boolean
    facility_personnel: boolean
    review: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inspection_reviewUncheckedCreateWithoutFacilityInput = {
    id?: number
    cac: boolean
    owner_nin: boolean
    services_offered: boolean
    number_of_bed: boolean
    source_of_water: boolean
    method_of_disposal: boolean
    site_plan: boolean
    building_plan: boolean
    compliance_certificate?: boolean | null
    tax_clearance_certificate: boolean
    facility_personnel_count: boolean
    facility_personnel: boolean
    review: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inspection_reviewCreateOrConnectWithoutFacilityInput = {
    where: inspection_reviewWhereUniqueInput
    create: XOR<inspection_reviewCreateWithoutFacilityInput, inspection_reviewUncheckedCreateWithoutFacilityInput>
  }

  export type inspection_reviewCreateManyFacilityInputEnvelope = {
    data: inspection_reviewCreateManyFacilityInput | inspection_reviewCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type inspectorCreateWithoutFacilityInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    address: string
    role?: $Enums.Role
    lga?: string | null
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inspectorUncheckedCreateWithoutFacilityInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    address: string
    role?: $Enums.Role
    lga?: string | null
    profile_image: string
    password: string
    reset_password_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type inspectorCreateOrConnectWithoutFacilityInput = {
    where: inspectorWhereUniqueInput
    create: XOR<inspectorCreateWithoutFacilityInput, inspectorUncheckedCreateWithoutFacilityInput>
  }

  export type facility_personnelUpsertWithWhereUniqueWithoutFacilityInput = {
    where: facility_personnelWhereUniqueInput
    update: XOR<facility_personnelUpdateWithoutFacilityInput, facility_personnelUncheckedUpdateWithoutFacilityInput>
    create: XOR<facility_personnelCreateWithoutFacilityInput, facility_personnelUncheckedCreateWithoutFacilityInput>
  }

  export type facility_personnelUpdateWithWhereUniqueWithoutFacilityInput = {
    where: facility_personnelWhereUniqueInput
    data: XOR<facility_personnelUpdateWithoutFacilityInput, facility_personnelUncheckedUpdateWithoutFacilityInput>
  }

  export type facility_personnelUpdateManyWithWhereWithoutFacilityInput = {
    where: facility_personnelScalarWhereInput
    data: XOR<facility_personnelUpdateManyMutationInput, facility_personnelUncheckedUpdateManyWithoutFacilityInput>
  }

  export type inspection_reviewUpsertWithWhereUniqueWithoutFacilityInput = {
    where: inspection_reviewWhereUniqueInput
    update: XOR<inspection_reviewUpdateWithoutFacilityInput, inspection_reviewUncheckedUpdateWithoutFacilityInput>
    create: XOR<inspection_reviewCreateWithoutFacilityInput, inspection_reviewUncheckedCreateWithoutFacilityInput>
  }

  export type inspection_reviewUpdateWithWhereUniqueWithoutFacilityInput = {
    where: inspection_reviewWhereUniqueInput
    data: XOR<inspection_reviewUpdateWithoutFacilityInput, inspection_reviewUncheckedUpdateWithoutFacilityInput>
  }

  export type inspection_reviewUpdateManyWithWhereWithoutFacilityInput = {
    where: inspection_reviewScalarWhereInput
    data: XOR<inspection_reviewUpdateManyMutationInput, inspection_reviewUncheckedUpdateManyWithoutFacilityInput>
  }

  export type inspection_reviewScalarWhereInput = {
    AND?: inspection_reviewScalarWhereInput | inspection_reviewScalarWhereInput[]
    OR?: inspection_reviewScalarWhereInput[]
    NOT?: inspection_reviewScalarWhereInput | inspection_reviewScalarWhereInput[]
    id?: IntFilter<"inspection_review"> | number
    facility_id?: IntFilter<"inspection_review"> | number
    cac?: BoolFilter<"inspection_review"> | boolean
    owner_nin?: BoolFilter<"inspection_review"> | boolean
    services_offered?: BoolFilter<"inspection_review"> | boolean
    number_of_bed?: BoolFilter<"inspection_review"> | boolean
    source_of_water?: BoolFilter<"inspection_review"> | boolean
    method_of_disposal?: BoolFilter<"inspection_review"> | boolean
    site_plan?: BoolFilter<"inspection_review"> | boolean
    building_plan?: BoolFilter<"inspection_review"> | boolean
    compliance_certificate?: BoolNullableFilter<"inspection_review"> | boolean | null
    tax_clearance_certificate?: BoolFilter<"inspection_review"> | boolean
    facility_personnel_count?: BoolFilter<"inspection_review"> | boolean
    facility_personnel?: BoolFilter<"inspection_review"> | boolean
    review?: StringFilter<"inspection_review"> | string
    status?: EnumStatusFilter<"inspection_review"> | $Enums.Status
    createdAt?: DateTimeFilter<"inspection_review"> | Date | string
    updatedAt?: DateTimeFilter<"inspection_review"> | Date | string
  }

  export type inspectorUpsertWithoutFacilityInput = {
    update: XOR<inspectorUpdateWithoutFacilityInput, inspectorUncheckedUpdateWithoutFacilityInput>
    create: XOR<inspectorCreateWithoutFacilityInput, inspectorUncheckedCreateWithoutFacilityInput>
    where?: inspectorWhereInput
  }

  export type inspectorUpdateToOneWithWhereWithoutFacilityInput = {
    where?: inspectorWhereInput
    data: XOR<inspectorUpdateWithoutFacilityInput, inspectorUncheckedUpdateWithoutFacilityInput>
  }

  export type inspectorUpdateWithoutFacilityInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspectorUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facilityCreateWithoutFacility_personnelInput = {
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    inspection_review?: inspection_reviewCreateNestedManyWithoutFacilityInput
    inspector?: inspectorCreateNestedOneWithoutFacilityInput
  }

  export type facilityUncheckedCreateWithoutFacility_personnelInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    assigned_inspector?: number | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    inspection_review?: inspection_reviewUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityCreateOrConnectWithoutFacility_personnelInput = {
    where: facilityWhereUniqueInput
    create: XOR<facilityCreateWithoutFacility_personnelInput, facilityUncheckedCreateWithoutFacility_personnelInput>
  }

  export type usersCreateWithoutFacility_personnelInput = {
    fullname: string
    email: string
    phone_number: string
    address: string
    type: $Enums.Type
    practice_id: string
    practice_certificate?: string | null
    enugu_practice_id: string
    specialization?: string | null
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    practice_id_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUncheckedCreateWithoutFacility_personnelInput = {
    id?: number
    fullname: string
    email: string
    phone_number: string
    address: string
    type: $Enums.Type
    practice_id: string
    practice_certificate?: string | null
    enugu_practice_id: string
    specialization?: string | null
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    practice_id_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersCreateOrConnectWithoutFacility_personnelInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFacility_personnelInput, usersUncheckedCreateWithoutFacility_personnelInput>
  }

  export type facilityUpsertWithoutFacility_personnelInput = {
    update: XOR<facilityUpdateWithoutFacility_personnelInput, facilityUncheckedUpdateWithoutFacility_personnelInput>
    create: XOR<facilityCreateWithoutFacility_personnelInput, facilityUncheckedCreateWithoutFacility_personnelInput>
    where?: facilityWhereInput
  }

  export type facilityUpdateToOneWithWhereWithoutFacility_personnelInput = {
    where?: facilityWhereInput
    data: XOR<facilityUpdateWithoutFacility_personnelInput, facilityUncheckedUpdateWithoutFacility_personnelInput>
  }

  export type facilityUpdateWithoutFacility_personnelInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection_review?: inspection_reviewUpdateManyWithoutFacilityNestedInput
    inspector?: inspectorUpdateOneWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateWithoutFacility_personnelInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_inspector?: NullableIntFieldUpdateOperationsInput | number | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection_review?: inspection_reviewUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type usersUpsertWithoutFacility_personnelInput = {
    update: XOR<usersUpdateWithoutFacility_personnelInput, usersUncheckedUpdateWithoutFacility_personnelInput>
    create: XOR<usersCreateWithoutFacility_personnelInput, usersUncheckedCreateWithoutFacility_personnelInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFacility_personnelInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFacility_personnelInput, usersUncheckedUpdateWithoutFacility_personnelInput>
  }

  export type usersUpdateWithoutFacility_personnelInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    practice_id?: StringFieldUpdateOperationsInput | string
    practice_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    practice_id_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutFacility_personnelInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    practice_id?: StringFieldUpdateOperationsInput | string
    practice_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    practice_id_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelCreateWithoutFood_facilityInput = {
    enugu_handler_id: string
    createdAt?: Date | string
    food_handler: food_handlersCreateNestedOneWithoutFood_facility_personnelInput
  }

  export type food_facility_personnelUncheckedCreateWithoutFood_facilityInput = {
    id?: number
    food_handler_id: number
    enugu_handler_id: string
    createdAt?: Date | string
  }

  export type food_facility_personnelCreateOrConnectWithoutFood_facilityInput = {
    where: food_facility_personnelWhereUniqueInput
    create: XOR<food_facility_personnelCreateWithoutFood_facilityInput, food_facility_personnelUncheckedCreateWithoutFood_facilityInput>
  }

  export type food_facility_personnelCreateManyFood_facilityInputEnvelope = {
    data: food_facility_personnelCreateManyFood_facilityInput | food_facility_personnelCreateManyFood_facilityInput[]
    skipDuplicates?: boolean
  }

  export type food_facility_personnelUpsertWithWhereUniqueWithoutFood_facilityInput = {
    where: food_facility_personnelWhereUniqueInput
    update: XOR<food_facility_personnelUpdateWithoutFood_facilityInput, food_facility_personnelUncheckedUpdateWithoutFood_facilityInput>
    create: XOR<food_facility_personnelCreateWithoutFood_facilityInput, food_facility_personnelUncheckedCreateWithoutFood_facilityInput>
  }

  export type food_facility_personnelUpdateWithWhereUniqueWithoutFood_facilityInput = {
    where: food_facility_personnelWhereUniqueInput
    data: XOR<food_facility_personnelUpdateWithoutFood_facilityInput, food_facility_personnelUncheckedUpdateWithoutFood_facilityInput>
  }

  export type food_facility_personnelUpdateManyWithWhereWithoutFood_facilityInput = {
    where: food_facility_personnelScalarWhereInput
    data: XOR<food_facility_personnelUpdateManyMutationInput, food_facility_personnelUncheckedUpdateManyWithoutFood_facilityInput>
  }

  export type food_facilityCreateWithoutFood_facility_personnelInput = {
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_email: string
    lga?: string | null
    landmark?: string | null
    source_of_water: string
    method_of_disposal: string
    category?: $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_food_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_facilityUncheckedCreateWithoutFood_facility_personnelInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_email: string
    lga?: string | null
    landmark?: string | null
    source_of_water: string
    method_of_disposal: string
    category?: $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_food_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_facilityCreateOrConnectWithoutFood_facility_personnelInput = {
    where: food_facilityWhereUniqueInput
    create: XOR<food_facilityCreateWithoutFood_facility_personnelInput, food_facilityUncheckedCreateWithoutFood_facility_personnelInput>
  }

  export type food_handlersCreateWithoutFood_facility_personnelInput = {
    fullname: string
    email: string
    phone_number: string
    address: string
    enugu_handler_id: string
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_handlersUncheckedCreateWithoutFood_facility_personnelInput = {
    id?: number
    fullname: string
    email: string
    phone_number: string
    address: string
    enugu_handler_id: string
    nin: string
    nin_image?: string | null
    lga?: string | null
    state?: string | null
    gender?: string | null
    expiry_date: string
    nin_status?: $Enums.Status
    status?: $Enums.Status
    passport?: string | null
    password?: string | null
    reset_password_token?: string | null
    certificate_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type food_handlersCreateOrConnectWithoutFood_facility_personnelInput = {
    where: food_handlersWhereUniqueInput
    create: XOR<food_handlersCreateWithoutFood_facility_personnelInput, food_handlersUncheckedCreateWithoutFood_facility_personnelInput>
  }

  export type food_facilityUpsertWithoutFood_facility_personnelInput = {
    update: XOR<food_facilityUpdateWithoutFood_facility_personnelInput, food_facilityUncheckedUpdateWithoutFood_facility_personnelInput>
    create: XOR<food_facilityCreateWithoutFood_facility_personnelInput, food_facilityUncheckedCreateWithoutFood_facility_personnelInput>
    where?: food_facilityWhereInput
  }

  export type food_facilityUpdateToOneWithWhereWithoutFood_facility_personnelInput = {
    where?: food_facilityWhereInput
    data: XOR<food_facilityUpdateWithoutFood_facility_personnelInput, food_facilityUncheckedUpdateWithoutFood_facility_personnelInput>
  }

  export type food_facilityUpdateWithoutFood_facility_personnelInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_food_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facilityUncheckedUpdateWithoutFood_facility_personnelInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_food_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_handlersUpsertWithoutFood_facility_personnelInput = {
    update: XOR<food_handlersUpdateWithoutFood_facility_personnelInput, food_handlersUncheckedUpdateWithoutFood_facility_personnelInput>
    create: XOR<food_handlersCreateWithoutFood_facility_personnelInput, food_handlersUncheckedCreateWithoutFood_facility_personnelInput>
    where?: food_handlersWhereInput
  }

  export type food_handlersUpdateToOneWithWhereWithoutFood_facility_personnelInput = {
    where?: food_handlersWhereInput
    data: XOR<food_handlersUpdateWithoutFood_facility_personnelInput, food_handlersUncheckedUpdateWithoutFood_facility_personnelInput>
  }

  export type food_handlersUpdateWithoutFood_facility_personnelInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_handlersUncheckedUpdateWithoutFood_facility_personnelInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    expiry_date?: StringFieldUpdateOperationsInput | string
    nin_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facilityCreateManyInspectorInput = {
    id?: number
    facility_name: string
    location: string
    cac: string
    cac_image?: string | null
    owner_name: string
    owner_phone_number: string
    owner_contact_address: string
    owner_nin: string
    owner_nin_image?: string | null
    owner_passport?: string | null
    owner_email: string
    owner_gender?: string | null
    lga?: string | null
    facility_sector: $Enums.Sector
    facility_type: $Enums.Facility_Type
    facility_level: $Enums.Level
    personnel_incharge?: string | null
    personnel_incharge_name?: string | null
    personnel_incharge_practice_id?: string | null
    supervising_doctor_name?: string | null
    supervising_doctor_practice_id?: string | null
    services_offered: string
    landmark?: string | null
    number_of_bed: number
    source_of_water: string
    method_of_disposal: string
    site_plan: string
    building_plan: string
    tax_clearance_certificate: string
    compliance_certificate?: string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: string | null
    enugu_facility_id: string
    reference: string
    current_reference?: string | null
    password?: string | null
    reset_password_token?: string | null
    inspection_date?: Date | string | null
    is_inspected?: boolean
    certificate_url?: string | null
    cac_status: $Enums.Status
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facilityUpdateWithoutInspectorInput = {
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUpdateManyWithoutFacilityNestedInput
    inspection_review?: inspection_reviewUpdateManyWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateWithoutInspectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility_personnel?: facility_personnelUncheckedUpdateManyWithoutFacilityNestedInput
    inspection_review?: inspection_reviewUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateManyWithoutInspectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cac?: StringFieldUpdateOperationsInput | string
    cac_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_phone_number?: StringFieldUpdateOperationsInput | string
    owner_contact_address?: StringFieldUpdateOperationsInput | string
    owner_nin?: StringFieldUpdateOperationsInput | string
    owner_nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    owner_passport?: NullableStringFieldUpdateOperationsInput | string | null
    owner_email?: StringFieldUpdateOperationsInput | string
    owner_gender?: NullableStringFieldUpdateOperationsInput | string | null
    lga?: NullableStringFieldUpdateOperationsInput | string | null
    facility_sector?: EnumSectorFieldUpdateOperationsInput | $Enums.Sector
    facility_type?: EnumFacility_TypeFieldUpdateOperationsInput | $Enums.Facility_Type
    facility_level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    personnel_incharge?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_name?: NullableStringFieldUpdateOperationsInput | string | null
    personnel_incharge_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    supervising_doctor_practice_id?: NullableStringFieldUpdateOperationsInput | string | null
    services_offered?: StringFieldUpdateOperationsInput | string
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_bed?: IntFieldUpdateOperationsInput | number
    source_of_water?: StringFieldUpdateOperationsInput | string
    method_of_disposal?: StringFieldUpdateOperationsInput | string
    site_plan?: StringFieldUpdateOperationsInput | string
    building_plan?: StringFieldUpdateOperationsInput | string
    tax_clearance_certificate?: StringFieldUpdateOperationsInput | string
    compliance_certificate?: NullableStringFieldUpdateOperationsInput | string | null
    facility_personnel_count?: NullableJsonNullValueInput | InputJsonValue
    expiry_date?: NullableStringFieldUpdateOperationsInput | string | null
    enugu_facility_id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    current_reference?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    inspection_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_inspected?: BoolFieldUpdateOperationsInput | boolean
    certificate_url?: NullableStringFieldUpdateOperationsInput | string | null
    cac_status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type local_governmentCreateManyStateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type local_governmentUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type local_governmentUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type local_governmentUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelCreateManyUserInput = {
    id?: number
    facility_id: number
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
  }

  export type facility_personnelUpdateWithoutUserInput = {
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: facilityUpdateOneRequiredWithoutFacility_personnelNestedInput
  }

  export type facility_personnelUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_id?: IntFieldUpdateOperationsInput | number
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    facility_id?: IntFieldUpdateOperationsInput | number
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelCreateManyFood_handlerInput = {
    id?: number
    food_facility_id: number
    enugu_handler_id: string
    createdAt?: Date | string
  }

  export type food_facility_personnelUpdateWithoutFood_handlerInput = {
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_facility?: food_facilityUpdateOneRequiredWithoutFood_facility_personnelNestedInput
  }

  export type food_facility_personnelUncheckedUpdateWithoutFood_handlerInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_facility_id?: IntFieldUpdateOperationsInput | number
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelUncheckedUpdateManyWithoutFood_handlerInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_facility_id?: IntFieldUpdateOperationsInput | number
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelCreateManyFacilityInput = {
    id?: number
    user_id: number
    enugu_practice_id: string
    type: string
    createdAt?: Date | string
  }

  export type inspection_reviewCreateManyFacilityInput = {
    id?: number
    cac: boolean
    owner_nin: boolean
    services_offered: boolean
    number_of_bed: boolean
    source_of_water: boolean
    method_of_disposal: boolean
    site_plan: boolean
    building_plan: boolean
    compliance_certificate?: boolean | null
    tax_clearance_certificate: boolean
    facility_personnel_count: boolean
    facility_personnel: boolean
    review: string
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type facility_personnelUpdateWithoutFacilityInput = {
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutFacility_personnelNestedInput
  }

  export type facility_personnelUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type facility_personnelUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    enugu_practice_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspection_reviewUpdateWithoutFacilityInput = {
    cac?: BoolFieldUpdateOperationsInput | boolean
    owner_nin?: BoolFieldUpdateOperationsInput | boolean
    services_offered?: BoolFieldUpdateOperationsInput | boolean
    number_of_bed?: BoolFieldUpdateOperationsInput | boolean
    source_of_water?: BoolFieldUpdateOperationsInput | boolean
    method_of_disposal?: BoolFieldUpdateOperationsInput | boolean
    site_plan?: BoolFieldUpdateOperationsInput | boolean
    building_plan?: BoolFieldUpdateOperationsInput | boolean
    compliance_certificate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tax_clearance_certificate?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel_count?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel?: BoolFieldUpdateOperationsInput | boolean
    review?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspection_reviewUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    cac?: BoolFieldUpdateOperationsInput | boolean
    owner_nin?: BoolFieldUpdateOperationsInput | boolean
    services_offered?: BoolFieldUpdateOperationsInput | boolean
    number_of_bed?: BoolFieldUpdateOperationsInput | boolean
    source_of_water?: BoolFieldUpdateOperationsInput | boolean
    method_of_disposal?: BoolFieldUpdateOperationsInput | boolean
    site_plan?: BoolFieldUpdateOperationsInput | boolean
    building_plan?: BoolFieldUpdateOperationsInput | boolean
    compliance_certificate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tax_clearance_certificate?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel_count?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel?: BoolFieldUpdateOperationsInput | boolean
    review?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inspection_reviewUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    cac?: BoolFieldUpdateOperationsInput | boolean
    owner_nin?: BoolFieldUpdateOperationsInput | boolean
    services_offered?: BoolFieldUpdateOperationsInput | boolean
    number_of_bed?: BoolFieldUpdateOperationsInput | boolean
    source_of_water?: BoolFieldUpdateOperationsInput | boolean
    method_of_disposal?: BoolFieldUpdateOperationsInput | boolean
    site_plan?: BoolFieldUpdateOperationsInput | boolean
    building_plan?: BoolFieldUpdateOperationsInput | boolean
    compliance_certificate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tax_clearance_certificate?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel_count?: BoolFieldUpdateOperationsInput | boolean
    facility_personnel?: BoolFieldUpdateOperationsInput | boolean
    review?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelCreateManyFood_facilityInput = {
    id?: number
    food_handler_id: number
    enugu_handler_id: string
    createdAt?: Date | string
  }

  export type food_facility_personnelUpdateWithoutFood_facilityInput = {
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food_handler?: food_handlersUpdateOneRequiredWithoutFood_facility_personnelNestedInput
  }

  export type food_facility_personnelUncheckedUpdateWithoutFood_facilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_handler_id?: IntFieldUpdateOperationsInput | number
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type food_facility_personnelUncheckedUpdateManyWithoutFood_facilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    food_handler_id?: IntFieldUpdateOperationsInput | number
    enugu_handler_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use InspectorCountOutputTypeDefaultArgs instead
     */
    export type InspectorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InspectorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StateCountOutputTypeDefaultArgs instead
     */
    export type StateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Food_handlersCountOutputTypeDefaultArgs instead
     */
    export type Food_handlersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Food_handlersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacilityCountOutputTypeDefaultArgs instead
     */
    export type FacilityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Food_facilityCountOutputTypeDefaultArgs instead
     */
    export type Food_facilityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Food_facilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inspection_reviewDefaultArgs instead
     */
    export type inspection_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inspection_reviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inspectorDefaultArgs instead
     */
    export type inspectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inspectorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stateDefaultArgs instead
     */
    export type stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = stateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use local_governmentDefaultArgs instead
     */
    export type local_governmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = local_governmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use food_handlersDefaultArgs instead
     */
    export type food_handlersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = food_handlersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use personnel_paymentDefaultArgs instead
     */
    export type personnel_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = personnel_paymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use facility_paymentDefaultArgs instead
     */
    export type facility_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = facility_paymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use facility_complete_paymentDefaultArgs instead
     */
    export type facility_complete_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = facility_complete_paymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use revokedTokenDefaultArgs instead
     */
    export type revokedTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = revokedTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use facilityDefaultArgs instead
     */
    export type facilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = facilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use facility_personnelDefaultArgs instead
     */
    export type facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = facility_personnelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use food_facilityDefaultArgs instead
     */
    export type food_facilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = food_facilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use food_facility_personnelDefaultArgs instead
     */
    export type food_facility_personnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = food_facility_personnelDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}