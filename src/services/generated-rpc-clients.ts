import type { AviationServiceClient as AviationServiceClientInstance } from '@/generated/client/meridian/aviation/v1/service_client';
import type { ClimateServiceClient as ClimateServiceClientInstance } from '@/generated/client/meridian/climate/v1/service_client';
import type { ConflictServiceClient as ConflictServiceClientInstance } from '@/generated/client/meridian/conflict/v1/service_client';
import type { ConsumerPricesServiceClient as ConsumerPricesServiceClientInstance } from '@/generated/client/meridian/consumer_prices/v1/service_client';
import type { CyberServiceClient as CyberServiceClientInstance } from '@/generated/client/meridian/cyber/v1/service_client';
import type { DisplacementServiceClient as DisplacementServiceClientInstance } from '@/generated/client/meridian/displacement/v1/service_client';
import type { EconomicServiceClient as EconomicServiceClientInstance } from '@/generated/client/meridian/economic/v1/service_client';
import type { ForecastServiceClient as ForecastServiceClientInstance } from '@/generated/client/meridian/forecast/v1/service_client';
import type { GivingServiceClient as GivingServiceClientInstance } from '@/generated/client/meridian/giving/v1/service_client';
import type { HealthServiceClient as HealthServiceClientInstance } from '@/generated/client/meridian/health/v1/service_client';
import type { InfrastructureServiceClient as InfrastructureServiceClientInstance } from '@/generated/client/meridian/infrastructure/v1/service_client';
import type { IntelligenceServiceClient as IntelligenceServiceClientInstance } from '@/generated/client/meridian/intelligence/v1/service_client';
import type { MaritimeServiceClient as MaritimeServiceClientInstance } from '@/generated/client/meridian/maritime/v1/service_client';
import type { MarketServiceClient as MarketServiceClientInstance } from '@/generated/client/meridian/market/v1/service_client';
import type { MilitaryServiceClient as MilitaryServiceClientInstance } from '@/generated/client/meridian/military/v1/service_client';
import type { NaturalServiceClient as NaturalServiceClientInstance } from '@/generated/client/meridian/natural/v1/service_client';
import type { NewsServiceClient as NewsServiceClientInstance } from '@/generated/client/meridian/news/v1/service_client';
import type { PositiveEventsServiceClient as PositiveEventsServiceClientInstance } from '@/generated/client/meridian/positive_events/v1/service_client';
import type { PredictionServiceClient as PredictionServiceClientInstance } from '@/generated/client/meridian/prediction/v1/service_client';
import type { RadiationServiceClient as RadiationServiceClientInstance } from '@/generated/client/meridian/radiation/v1/service_client';
import type { ResearchServiceClient as ResearchServiceClientInstance } from '@/generated/client/meridian/research/v1/service_client';
import type { ResilienceServiceClient as ResilienceServiceClientInstance } from '@/generated/client/meridian/resilience/v1/service_client';
import type { SanctionsServiceClient as SanctionsServiceClientInstance } from '@/generated/client/meridian/sanctions/v1/service_client';
import type { ScenarioServiceClient as ScenarioServiceClientInstance } from '@/generated/client/meridian/scenario/v1/service_client';
import type { SeismologyServiceClient as SeismologyServiceClientInstance } from '@/generated/client/meridian/seismology/v1/service_client';
import type { SupplyChainServiceClient as SupplyChainServiceClientInstance } from '@/generated/client/meridian/supply_chain/v1/service_client';
import type { ThermalServiceClient as ThermalServiceClientInstance } from '@/generated/client/meridian/thermal/v1/service_client';
import type { TradeServiceClient as TradeServiceClientInstance } from '@/generated/client/meridian/trade/v1/service_client';
import type { UnrestServiceClient as UnrestServiceClientInstance } from '@/generated/client/meridian/unrest/v1/service_client';
import type { WebcamServiceClient as WebcamServiceClientInstance } from '@/generated/client/meridian/webcam/v1/service_client';
import type { WildfireServiceClient as WildfireServiceClientInstance } from '@/generated/client/meridian/wildfire/v1/service_client';

type RpcClientOptions = { fetch?: typeof fetch; defaultHeaders?: Record<string, string> };
type RpcClientConstructor<T extends object> = new (baseURL: string, options?: RpcClientOptions) => T;
type RpcClientConstructorLoader<T extends object> = () => Promise<RpcClientConstructor<T>>;

export function createLazyRpcClientConstructor<T extends object>(loadConstructor: RpcClientConstructorLoader<T>): RpcClientConstructor<T> {
  return function LazyRpcClient(baseURL: string, options?: RpcClientOptions): T {
    let clientPromise: Promise<T> | undefined;
    const getClient = () => {
      if (!clientPromise) {
        clientPromise = loadConstructor()
          .then((ClientCtor) => new ClientCtor(baseURL, options))
          .catch((error) => {
            clientPromise = undefined;
            throw error;
          });
      }
      return clientPromise;
    };

    return new Proxy({}, {
      get(target, property, receiver) {
        if (property === 'then') return undefined;
        if (typeof property === 'symbol') return Reflect.get(target, property, receiver);
        return (...args: unknown[]) => getClient().then((client) => {
          const value = (client as Record<PropertyKey, unknown>)[property];
          return typeof value === 'function' ? value.apply(client, args) : value;
        });
      },
    }) as T;
  } as unknown as RpcClientConstructor<T>;
}

export const AviationServiceClient = createLazyRpcClientConstructor<AviationServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/aviation/v1/service_client');
  return module.AviationServiceClient;
});

export const ClimateServiceClient = createLazyRpcClientConstructor<ClimateServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/climate/v1/service_client');
  return module.ClimateServiceClient;
});

export const ConflictServiceClient = createLazyRpcClientConstructor<ConflictServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/conflict/v1/service_client');
  return module.ConflictServiceClient;
});

export const ConsumerPricesServiceClient = createLazyRpcClientConstructor<ConsumerPricesServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/consumer_prices/v1/service_client');
  return module.ConsumerPricesServiceClient;
});

export const CyberServiceClient = createLazyRpcClientConstructor<CyberServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/cyber/v1/service_client');
  return module.CyberServiceClient;
});

export const DisplacementServiceClient = createLazyRpcClientConstructor<DisplacementServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/displacement/v1/service_client');
  return module.DisplacementServiceClient;
});

export const EconomicServiceClient = createLazyRpcClientConstructor<EconomicServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/economic/v1/service_client');
  return module.EconomicServiceClient;
});

export const ForecastServiceClient = createLazyRpcClientConstructor<ForecastServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/forecast/v1/service_client');
  return module.ForecastServiceClient;
});

export const GivingServiceClient = createLazyRpcClientConstructor<GivingServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/giving/v1/service_client');
  return module.GivingServiceClient;
});

export const HealthServiceClient = createLazyRpcClientConstructor<HealthServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/health/v1/service_client');
  return module.HealthServiceClient;
});

export const InfrastructureServiceClient = createLazyRpcClientConstructor<InfrastructureServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/infrastructure/v1/service_client');
  return module.InfrastructureServiceClient;
});

export const IntelligenceServiceClient = createLazyRpcClientConstructor<IntelligenceServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/intelligence/v1/service_client');
  return module.IntelligenceServiceClient;
});

export const MaritimeServiceClient = createLazyRpcClientConstructor<MaritimeServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/maritime/v1/service_client');
  return module.MaritimeServiceClient;
});

export const MarketServiceClient = createLazyRpcClientConstructor<MarketServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/market/v1/service_client');
  return module.MarketServiceClient;
});

export const MilitaryServiceClient = createLazyRpcClientConstructor<MilitaryServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/military/v1/service_client');
  return module.MilitaryServiceClient;
});

export const NaturalServiceClient = createLazyRpcClientConstructor<NaturalServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/natural/v1/service_client');
  return module.NaturalServiceClient;
});

export const NewsServiceClient = createLazyRpcClientConstructor<NewsServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/news/v1/service_client');
  return module.NewsServiceClient;
});

export const PositiveEventsServiceClient = createLazyRpcClientConstructor<PositiveEventsServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/positive_events/v1/service_client');
  return module.PositiveEventsServiceClient;
});

export const PredictionServiceClient = createLazyRpcClientConstructor<PredictionServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/prediction/v1/service_client');
  return module.PredictionServiceClient;
});

export const RadiationServiceClient = createLazyRpcClientConstructor<RadiationServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/radiation/v1/service_client');
  return module.RadiationServiceClient;
});

export const ResearchServiceClient = createLazyRpcClientConstructor<ResearchServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/research/v1/service_client');
  return module.ResearchServiceClient;
});

export const ResilienceServiceClient = createLazyRpcClientConstructor<ResilienceServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/resilience/v1/service_client');
  return module.ResilienceServiceClient;
});

export const SanctionsServiceClient = createLazyRpcClientConstructor<SanctionsServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/sanctions/v1/service_client');
  return module.SanctionsServiceClient;
});

export const ScenarioServiceClient = createLazyRpcClientConstructor<ScenarioServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/scenario/v1/service_client');
  return module.ScenarioServiceClient;
});

export const SeismologyServiceClient = createLazyRpcClientConstructor<SeismologyServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/seismology/v1/service_client');
  return module.SeismologyServiceClient;
});

export const SupplyChainServiceClient = createLazyRpcClientConstructor<SupplyChainServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/supply_chain/v1/service_client');
  return module.SupplyChainServiceClient;
});

export const ThermalServiceClient = createLazyRpcClientConstructor<ThermalServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/thermal/v1/service_client');
  return module.ThermalServiceClient;
});

export const TradeServiceClient = createLazyRpcClientConstructor<TradeServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/trade/v1/service_client');
  return module.TradeServiceClient;
});

export const UnrestServiceClient = createLazyRpcClientConstructor<UnrestServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/unrest/v1/service_client');
  return module.UnrestServiceClient;
});

export const WebcamServiceClient = createLazyRpcClientConstructor<WebcamServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/webcam/v1/service_client');
  return module.WebcamServiceClient;
});

export const WildfireServiceClient = createLazyRpcClientConstructor<WildfireServiceClientInstance>(async () => {
  const module = await import('@/generated/client/meridian/wildfire/v1/service_client');
  return module.WildfireServiceClient;
});
