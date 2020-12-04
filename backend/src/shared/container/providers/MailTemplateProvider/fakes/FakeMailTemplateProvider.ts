import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailtemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailtemplateProvider;
