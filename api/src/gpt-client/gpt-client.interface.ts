import { ModuleMetadata, Type } from "@nestjs/common";

export interface GPTClientModuleOptions {
    gpt_token:string
}

export interface GPTClientModuleFactory {
    createGPTClientModuleOptions: () => 
        | Promise<GPTClientModuleOptions>
        | GPTClientModuleOptions;
}

export interface GPTClientModuleAsyncOptions extends Pick<ModuleMetadata, "imports"> {
  useClass?: Type<GPTClientModuleFactory>;
  useExisting?: Type<GPTClientModuleFactory>;
  useFactory?: (...args: any[]) => Promise<GPTClientModuleOptions> | GPTClientModuleOptions;
  inject?: any[];
}