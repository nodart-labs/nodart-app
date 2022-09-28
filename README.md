## "NODART" FRAMEWORK SAMPLE APPLICATION

### INSTALL APPLICATION

### 1. GIT
```
git clone https://github.com/nodart-labs/nodart-app.git
```
downloads current version's application with full usage examples.

### 2. CLI
```
npx nodart create-app
```
creates base application structure with some usage examples.

---

### RUN UNDER DEVELOPMENT SERVER
```
npm run dev
```

### RUN UNDER PRODUCTION
```
npm run start
```

---

### COMMAND LINE INTERFACE

### System Commands:
```
npx nodart [command name] [command action (optional)] --[argument name (optional)] [argument value]
```

### App Commands:
```
node cmd [command name] [command action (optional)] --[argument name (optional)] [argument value]
```

---

### DATABASE MIGRATION CLI

#### Creating and running a Single Migration
```
npx nodart migrate make --name migration-name
```
```
npx nodart migrate up | down
```

#### Creating and running the Group of Migrations in a single file
```
npx nodart migrate make-source --name source-name --migrations[optional] migration1 migration2 ...
```
```
npx nodart migrate source-up | source-down --name source-name --migrations[optional] migration1 migration2 ...
```

#### Roll back the latest migration
```
npx nodart migrate rollback --all[optional]
```

#### Run all migrations that have not yet been run
```
npx nodart migrate latest
```

#### Retrieve and return the current migration version
```
npx nodart migrate version
```

#### Return list of completed and pending migrations
```
npx nodart migrate list
```

#### Forcibly unlock the migrations lock table, and ensure that there is only one row in it
```
npx nodart migrate unlock
```

---

### DATABASE SEED CLI

#### Creates a new seed file, with the name of the seed file being added.
If the seed directory config is an array of paths, the seed file will be generated in the latest specified.
```
npx nodart seed make --name seed-name
```
```
npx nodart seed run
```

#### Creating and running the Group of Seeds in a single file
```
npx nodart seed make-source --name source-name --seeds[optional] seed1 seed2 ...
```
```
npx nodart seed source-run --name source-name --seeds[optional] seed1 seed2 ...
```
