import { Inject, Injectable } from "@nestjs/common";
import { GPTClientModuleOptions } from "./gpt-client.interface";
import OpenAI from "openai";
import { GPT_CLIENT_MODULE_OPTIONS } from "./gpt-client.constants";

@Injectable()
export class GPTClientService {

    private readonly openai:OpenAI;

    constructor(
       @Inject(GPT_CLIENT_MODULE_OPTIONS)
       private readonly options: GPTClientModuleOptions
    ) {

      this.openai = new OpenAI({
        apiKey: this.options.gpt_token,
      });
    }


    public async send(qwery:string) {
      return this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {"role": "user", "content": "Write what you can do"},
        ],
        //stream: true,
      });
      
          
          // //.then((result) => console.log(result.choices[0].message));

          // return completion;
    }
}