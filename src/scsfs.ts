import { isSameDay } from 'date-fns';
import { Context } from './execute';
import { SCS } from './scs';

export class SCSFS {
    files: { [key: string]: string } = {};
    add(name: string, data: string) {
        this.files[name] = data;
    }
    addAsync(
        files: { [key: string]: string },
        fetcher: (name: string) => Promise<string>
    ) {
        return Promise.all(
            Object.keys(files).map(async (f) => {
                this.add(f, await fetcher(files[f]));
            })
        );
    }
    scheduleFor({ filename, date, user, context }: {
        filename: string,
        date: Date,
        user: { grade: string, classes: unknown[], schoolName: string },
        context?: Context
    }
    ): { schedule: unknown; event: unknown } | undefined {
        // @todo pls add type
        // this function should do way more processing, ie including lunch info
        const file = this.files[filename];
        if (!file) {
            throw new Error(`File ${filename} not found`);
        }
        const parsed = new SCS(file, this.resolve.bind(this));
        return parsed.scheduleFor({ date, user, context });
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
    bundle(filename: string) {
        const file = this.files[filename];
        if (!file) {
            throw new Error(`File ${filename} not found`);
        }
        const parsed = new SCS(file, this.resolve.bind(this));
        return parsed.bundle();
    }
}
