import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { GPTClientModuleAsyncOptions,  GPTClientModuleOptions } from './gpt-client.interface';
import { GPT_CLIENT_MODULE_OPTIONS } from './gpt-client.constants';
import { GPTClientService } from './gpt-clent.service';

@Global()
@Module({})
export class GPTClientModule {

    public static forRoot(options: GPTClientModuleOptions): DynamicModule {
      return {
        module: GPTClientModule,
        providers: [GPTClientService, { provide: GPT_CLIENT_MODULE_OPTIONS, useValue: options } ],
        exports: [GPTClientService],
      };
    }
    
    public static forRootAsync(options: GPTClientModuleAsyncOptions): DynamicModule {
        const asyncOptions = this.createAsyncOptionsProvider(options);

        return {
          module: GPTClientModule,
          imports: options.imports,
          providers: [GPTClientService, asyncOptions ],
          exports: [GPTClientService],
        };
      
    }
    
    private static createAsyncOptionsProvider(options: GPTClientModuleAsyncOptions):Provider {
        return {
          provide: GPT_CLIENT_MODULE_OPTIONS,
          useFactory: async (...args: any[]) => {
            const config = await options.useFactory(...args);
            return config;
          },
          inject: options.inject || [],
        };
    }

}
