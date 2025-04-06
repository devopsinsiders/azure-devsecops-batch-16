FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /dhondhu
COPY . .
RUN dotnet restore
RUN dotnet build --configuration Release
RUN dotnet publish -c Release -o ./publish


FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS kaushlesh
WORKDIR /dotnet_artifacts
COPY --from=build /dhondhu/publish .
ENTRYPOINT dotnet ElearnBackend.dll