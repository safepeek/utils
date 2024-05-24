import { ApplicationCommandType, ApplicationIntegrationType, InteractionContextType } from 'slash-create/web';

export interface CommandStatEntryMetadata {
  user_id: string;
  channel_id: string;
  guild_id: string | null;
  locale: string | null;
  guild_locale: string | null;
  interaction_id: string;
  invoked_at: number;
  bot_version: string;
  last_commit: string;
  environment: string;
}

export interface CommandStatEntry {
  name: string;
  id: string;
  type: ApplicationCommandType;
  // eslint-disable-next-line
  options: { [p: string]: any };
  context: InteractionContextType | null;
  integration_types: ApplicationIntegrationType[];
  metadata: CommandStatEntryMetadata;
}
