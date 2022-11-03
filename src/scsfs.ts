import { Context } from './execute';
import { SCS } from './scs';

export class SCSFS {
    files: { [key: string]: string } = {};
    add(name: string, data: string) {
        this.files[name] = data;
    }
    addMany(files: { [key: string]: string }) {
        this.files = { ...this.files, ...files };
    }
    addAsync(files: { [key: string]: string }, fetcher: (name: string) => Promise<string>) {
        return Promise.all(
            Object.keys(files).map(async (f) => {
                this.add(f, await fetcher(files[f]));
            })
        );
    }
    exec(filename: string, context?: Context) {
        const file = this.files[filename];
        if (!file) {
            throw new Error(`File ${filename} not found`);
        }
        const parsed = new SCS(file, this.resolve.bind(this));
        return parsed.exec(context);
    }
    resolve(filename: string): string {
        const data = this.files[filename];
        if (!data) {
            throw new Error(`File ${filename} not found`);
        }
        return data;
    }
}
