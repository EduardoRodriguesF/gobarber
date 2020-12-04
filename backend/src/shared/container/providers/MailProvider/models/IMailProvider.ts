import ISendMailDTO from '../dtos/ISendMailDTOS';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
